import axios, { AxiosError, AxiosResponse } from "axios";
import {
  all,
  call,
  put,
  StrictEffect,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { IUser } from "../interface/IUser.interface";
import {
  createUsersFailure,
  createUsersSuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../actions/UserActionCreators";
import { UserActionTypes } from "../actions/UserActionTypes.enum";
import { ICreateUsersRequest } from "../interface/IUserActions.interface";
import { isUser } from "../../../typeChecker";

// Request function
export const getUsers = () => axios.get<IUser[]>("http://localhost:5000/users");
export const postUsers = (dataToPost: IUser) => {
  return axios.post<IUser>("http://localhost:5000/users", dataToPost);
};
interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
// Worker function that performs the task
export function* fetchUsersSaga() {
  try {
    const response: AxiosResponse<IUser[]> = yield call(getUsers);
    console.log("getUsers response: " + response.data);
    const testUser = response.data[0];
    if (testUser && isUser(testUser)) {
      yield put(fetchUsersSuccess({ users: response.data }));
    }
  } catch (e) {
    yield put(fetchUsersFailure({ error: e.message }));
  }
}

// Worker function that performs the task
export function* createUsersSaga(action: ICreateUsersRequest) {
  const { user } = action; // Sagas accept entire action, need to destructure payload
  try {
    const response: AxiosResponse<IUser> = yield call(postUsers, user);

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
  yield takeEvery(UserActionTypes.CREATE_USER_REQUEST, createUsersSaga);
  yield takeEvery(UserActionTypes.FETCH_USER_REQUEST, fetchUsersSaga);
}

// // Watcher function that listens for fetch user actions
// function* watchFetchUsers(): Generator<StrictEffect> {
//   yield takeEvery(userTypes.FETCH_USER_REQUEST, fetchUsersSaga);
// }

// // Watcher function that listens for create user actions
// function* watchCreateUsers(): Generator<StrictEffect> {
//   yield takeEvery(userTypes.CREATE_USER_REQUEST, createUsersSaga);
// }

// export function* usersSaga() {
//   yield all([watchFetchUsers(), watchCreateUsers()]);
// }
