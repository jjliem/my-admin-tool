import { takeEvery } from "redux-saga/effects";
import { createUserSaga, fetchUserSaga, userSaga } from "./userSaga";
import { UserActionTypes } from "../actions/UserActionTypes.enum";

// Testing Watcher Saga
describe("userSaga watches for actions", () => {
  const generator = userSaga();

  it("should wait for every FETCH_USER_REQUEST action and call fetchUsersSaga", () => {
    expect(generator.next().value).toEqual(
      takeEvery(UserActionTypes.FETCH_USER_REQUEST, fetchUserSaga)
    );
  });

  it("should wait for every CREATE_USER_REQUEST action and call createUsersSaga", () => {
    expect(generator.next().value).toEqual(
      takeEvery(UserActionTypes.CREATE_USER_REQUEST, createUserSaga)
    );
  });

  it("should be done on next iteration", () => {
    expect(generator.next().done).toBeTruthy();
  });
});

//Testing fetchUsersSaga
