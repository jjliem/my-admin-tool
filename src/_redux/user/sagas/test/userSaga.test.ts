import { call, put } from "redux-saga/effects";
import GetUsersMock from "./GetUsersMock";
import { fetchUsersSaga, getUsers } from "../userSaga";
import {
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../../actions/UserActionCreators";

// Tests
describe("getUsers", () => {
  it("success triggers success action with users", () => {
    const generator = fetchUsersSaga();
    const response = { data: GetUsersMock };

    expect(generator.next().value).toEqual(call(getUsers));

    expect(generator.next(response).value).toEqual(
      put(fetchUsersSuccess(GetUsersMock))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });

  it("failure triggers failure action", () => {
    const generator = fetchUsersSaga();
    const response = {};
    const e = "error";

    expect(generator.next().value).toEqual(call(getUsers));

    expect(generator.next(response).value).toEqual(put(fetchUsersFailure(e)));

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});
