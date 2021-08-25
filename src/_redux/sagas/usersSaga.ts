import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IUser } from "../../interfaces/IUser";
import { fetchUsersFailure, fetchUsersSuccess } from "../actions/usersActions";
import { userTypes } from "../actiontypes/userTypes";

const getUsers = () => axios.get<IUser[]>("http://localhost:5000/users");

function* fetchUsersSaga() {
  try {
    const response = yield call(getUsers);
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

function* usersSaga() {
  yield all([takeLatest(userTypes.FETCH_USER_REQUEST, fetchUsersSaga)]);
}

export default usersSaga;
