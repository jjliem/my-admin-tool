import { call, put, takeEvery } from "redux-saga/effects";
import { postUserSaga, getUserSaga, getUser, userSaga } from "./userSaga";
import { UserActionTypes } from "../actions/UserActionTypes.enum";
import {
  getUserFailure,
  getUserSuccess,
} from "../actions/UserActionCreators";
import { IUser } from "../models/IUser.interface";

// Testing Watcher Saga
describe("userSaga watches for actions", () => {
  const generator = userSaga();

  it("should wait for every GET_USER_REQUEST action and call getUsersSaga", () => {
    expect(generator.next().value).toEqual(
      takeEvery(UserActionTypes.GET_USER_REQUEST, getUserSaga)
    );
  });

  it("should wait for every POST_USER_REQUEST action and call postUsersSaga", () => {
    expect(generator.next().value).toEqual(
      takeEvery(UserActionTypes.POST_USER_REQUEST, postUserSaga)
    );
  });

  it("should be done on next iteration", () => {
    expect(generator.next().done).toBeTruthy();
  });
});

// Testing getUserSaga
describe("getUserSaga", () => {
  it("success triggers success action with users", () => {
    const generator = getUserSaga();
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
      put(getUserSuccess(mockResponse.data))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });

  it("failure triggers failure action", async () => {
    const generator = getUserSaga();
    expect(generator.next().value).toEqual(call(getUser));
    expect(generator.throw("error").value).toEqual(
      put(getUserFailure("error"))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});
