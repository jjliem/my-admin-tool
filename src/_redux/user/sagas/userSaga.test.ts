import { call, put, takeEvery } from "redux-saga/effects";
import { createUserSaga, fetchUserSaga, getUser, userSaga } from "./userSaga";
import { UserActionTypes } from "../actions/UserActionTypes.enum";
import {
  fetchUserFailure,
  fetchUserSuccess,
} from "../actions/UserActionCreators";
import { IUser } from "../models/IUser.interface";

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

// Testing fetchUserSaga
describe("fetchUserSaga", () => {
  it("success triggers success action with users", () => {
    const generator = fetchUserSaga();
    const mockResponse = {
      status: 200,
      data: [
        {
          id: 1,
          fname: "Jane",
          lname: "Doe",
          email: "jane.doe@verizon.com",
          vzid: "doeja",
          workType: "FiOS",
          roleType: "Author",
        },
      ],
    };

    expect(generator.next().value).toEqual(call(getUser));
    expect(generator.next(mockResponse).value).toEqual(
      put(fetchUserSuccess(mockResponse.data))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });

  it("failure triggers failure action", async () => {
    const generator = fetchUserSaga();
    expect(generator.next().value).toEqual(call(getUser));
    expect(generator.throw("error").value).toEqual(
      put(fetchUserFailure("error"))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});
