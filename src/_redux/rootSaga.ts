import { all, fork } from "redux-saga/effects";
import { userSaga } from "./user/sagas/userSaga";

// Watcher Saga
export function* rootSaga() {
  yield all([fork(userSaga)]);
}
