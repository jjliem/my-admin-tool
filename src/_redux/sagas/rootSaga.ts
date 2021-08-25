import { all, fork } from "redux-saga/effects";
import usersSaga from "./usersSaga";

export function* rootSaga() {
  yield all([fork(usersSaga)]);
}
