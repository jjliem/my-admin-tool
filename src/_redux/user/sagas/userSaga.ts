import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ICreateUserRequest, IUser } from "../models/IUser.interface";
import {
  fetchUserSuccess,
  fetchUserFailure,
  createUserSuccess,
  createUserFailure,
} from "../actions/UserActionCreators";
import { UserActionTypes } from "../actions/UserActionTypes.enum";

// Request Functions

// export function getUser() {
//   return axios({
//     method: "get",
//     url: "http://localhost:5000/users",
//   });
// }
export const getUser = () => axios.get<IUser[]>("http://localhost:5000/users");

export const postUser = (dataToPost: IUser) => {
  return axios.post<IUser>("http://localhost:5000/users", dataToPost);
};

// Worker function that performs the task
export function* fetchUserSaga() {
  try {
    const response = yield call(getUser);
    console.log("getUsers response: " + response.data);
    yield put(fetchUserSuccess(response.data));
  } catch (e) {
    yield put(fetchUserFailure("error"));
  }
}

// Worker function that performs the task
export function* createUserSaga(action: ICreateUserRequest) {
  const { user } = action; // Sagas accept entire action, need to destructure payload
  try {
    const response = yield call(postUser, user);

    console.log("postUsers response: " + response.data);
    // To test if TS raises error if response is not of type IUser
    // let response1 = { ...response, dob: "june" };
    // console.log("JSON STRINGIFY: " + JSON.stringify(response1));

    // Put returns an object with instructions for middleware to dispatch the action
    yield put(createUserSuccess(response.data));
  } catch (e) {
    yield put(createUserFailure("error"));
  }
}

// Watcher function that listens for create user actions
export function* userSaga(): Generator<any> {
  yield takeEvery(UserActionTypes.FETCH_USER_REQUEST, fetchUserSaga);
  yield takeEvery(UserActionTypes.CREATE_USER_REQUEST, createUserSaga);
}
