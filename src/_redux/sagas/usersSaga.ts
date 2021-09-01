import axios, { AxiosResponse } from "axios";
import {
  all,
  call,
  put,
  StrictEffect,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { IUser } from "../types/IUser";
import {
  createUsersFailure,
  createUsersSuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../actions/usersActions";
import { userTypes } from "../actiontypes/userTypes";
import { CreateUsersRequest } from "../types/usersTypes";

// Request function
const getUsers = () => axios.get<IUser[]>("http://localhost:5000/users");
const postUsers = (dataToPost: IUser) => {
  return axios
    .post("http://localhost:5000/users", dataToPost)
    .then((res) => res.data);
};

// Worker function that performs the task
function* fetchUsersSaga() {
  try {
    const response: AxiosResponse = yield call(getUsers);
    console.log(response);
    yield put(
      fetchUsersSuccess({
        users: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchUsersFailure({
        error: e.message,
      })
    );
  }
}

// Worker function that performs the task
function* createUsersSaga(action: CreateUsersRequest) {
  const { user } = action; // Sagas accept entire action, need to destructure payload
  try {
    const response: AxiosResponse = yield call(postUsers, user);
    console.log(response);

    // Put returns an object with instructions for middleware to dispatch the action
    yield put(
      createUsersSuccess({
        user: response.data,
      })
    );
  } catch (e) {
    yield put(
      createUsersFailure({
        error: e.message,
      })
    );
  }
}

// Watcher function that listens for create user actions
export function* usersSaga(): Generator<any> {
  yield takeEvery(userTypes.CREATE_USER_REQUEST, createUsersSaga);
  yield takeEvery(userTypes.FETCH_USER_REQUEST, fetchUsersSaga);
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
