import { call, put } from "redux-saga/effects";
import GetUsersMock from "./GetUsersMock";
import { createUsersSaga, fetchUsersSaga, getUsers } from "../userSaga";
import {
  createUsersRequest,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../../actions/UserActionCreators";
import GetUserMock from "./GetUserMock";
import { UserActionTypes } from "../../actions/UserActionTypes.enum";
import { ICreateUsersRequest } from "../../interface/IUserActions.interface";
import { useDispatch } from "react-redux";
import { IUser } from "../../interface/IUser.interface";

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
    const response = {
      id: 1,
      bday: "July 23, 1980",
      fname: "Jane",
      lname: "Doe",
      email: "jane.doe@verizon.com",
      vzid: "doeja",
      workType: "FiOS",
      roleType: "Author",
    };
    //null resp is still valid? try adding different key?
    const e = "error";

    expect(generator.next().value).toEqual(call(getUsers));

    expect(generator.next(response).value).toEqual(put(fetchUsersFailure(e)));

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});

// describe("postUsers", () => {
//   it("success triggers success action with users", () => {
//     const dispatch = useDispatch();

//     const addUser = (user: IUser) => dispatch(createUsersRequest(user));

//     const generator = createUsersSaga();
//     const response = { data: GetUsersMock };

//     expect(generator.next().value).toEqual(call(getUsers));

//     expect(generator.next(response).value).toEqual(
//       put(fetchUsersSuccess(GetUsersMock))
//     );

//     expect(generator.next()).toEqual({ done: true, value: undefined });
//   });

//   it("failure triggers failure action", () => {
//     const generator = fetchUsersSaga();
//     const response = {};
//     const e = "error";

//     expect(generator.next().value).toEqual(call(getUsers));

//     expect(generator.next(response).value).toEqual(put(fetchUsersFailure(e)));

//     expect(generator.next()).toEqual({ done: true, value: undefined });
//   });
// });
