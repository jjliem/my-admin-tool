import axios from "axios";
import {
  call,
  put,
  takeEvery,
} from "redux-saga/effects";
import { IUser, ICreateUsersRequest } from "../interface/IUser.interface";
import {
  createUsersFailure,
  createUsersSuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../actions/UserActionCreators";
import { UserActionTypes } from "../actions/UserActionTypes.enum";

// Request function
export const getUsers = () => axios.get<IUser[]>("http://localhost:5000/users");

// const url:string = "http://localhost:5000/users";;
// export function* callApi(url) {
//   try {
//     const result = yield call()
//   }
// }

export const postUsers = (dataToPost: IUser) => {
  return axios.post<IUser>("http://localhost:5000/users", dataToPost);
};

// Worker function that performs the task
export function* fetchUsersSaga() {
  try {
    const response = yield call(getUsers);
    console.log("getUsers response: " + response.data);
    yield put(fetchUsersSuccess({ users: response.data }));
  } catch (e) {
    yield put(fetchUsersFailure({ error: e.message }));
  }
}

// Worker function that performs the task
export function* createUsersSaga(action: ICreateUsersRequest) {
  const { user } = action; // Sagas accept entire action, need to destructure payload
  try {
    const response = yield call(postUsers, user);

    console.log("postUsers response: " + response.data);
    // To test if TS raises error if response is not of type IUser
    // let response1 = { ...response, dob: "june" };
    // console.log("JSON STRINGIFY: " + JSON.stringify(response1));

    // Put returns an object with instructions for middleware to dispatch the action
    yield put(createUsersSuccess(response.data));
  } catch (e) {
    yield put(createUsersFailure(e));
  }
}

// Watcher function that listens for create user actions
export function* userSaga(): Generator<any> {
  yield takeEvery(UserActionTypes.FETCH_USER_REQUEST, fetchUsersSaga);
  yield takeEvery(UserActionTypes.CREATE_USER_REQUEST, createUsersSaga);
}
