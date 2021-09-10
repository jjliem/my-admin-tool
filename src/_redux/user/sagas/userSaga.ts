import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { IPostUserRequest, IUser } from "../models/IUser.interface";
import {
  getUserSuccess,
  getUserFailure,
  postUserSuccess,
  postUserFailure,
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
export function* getUserSaga() {
  try {
    const response = yield call(getUser);
    console.log("getUsers response: " + response.data);
    yield put(getUserSuccess(response.data));
  } catch (e) {
    yield put(getUserFailure("error"));
  }
}

// Worker function that performs the task
export function* postUserSaga(action: IPostUserRequest) {
  const { user } = action; // Sagas accept entire action, need to destructure payload
  try {
    const response = yield call(postUser, user);

    console.log("postUsers response: " + response.data);
    // To test if TS raises error if response is not of type IUser
    // let response1 = { ...response, dob: "june" };
    // console.log("JSON STRINGIFY: " + JSON.stringify(response1));

    // Put returns an object with instructions for middleware to dispatch the action
    yield put(postUserSuccess(response.data));
  } catch (e) {
    yield put(postUserFailure("error"));
  }
}

// Watcher function that listens for post user actions
export function* userSaga(): Generator<any> {
  yield takeEvery(UserActionTypes.GET_USER_REQUEST, getUserSaga);
  yield takeEvery(UserActionTypes.POST_USER_REQUEST, postUserSaga);
}
