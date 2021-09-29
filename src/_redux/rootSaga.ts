import { all, fork } from "redux-saga/effects";
import { userSaga } from "./user/sagas/userSaga";
import { workSaga } from "./worktype/sagas/workSaga";

// Watcher Saga
export function* rootSaga() {
  yield all([fork(userSaga), fork(workSaga)]);
}
