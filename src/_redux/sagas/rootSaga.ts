import { all, fork } from "redux-saga/effects";
import usersSaga from "./usersSaga";

// Watcher Saga
export function* rootSaga() {
  yield all([fork(usersSaga)]);
}
