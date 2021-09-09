import { takeEvery } from "redux-saga/effects";
import sinon from "sinon";
import { createUsersSaga, fetchUsersSaga, userSaga } from "../userSaga";
import axios from "axios";
import { UserActionTypes } from "../../actions/UserActionTypes.enum";
import { runSaga } from "redux-saga";
import { fetchUsersSuccess } from "../../actions/UserActionCreators";

// Testing Watcher Saga
describe("userSaga watches for actions", () => {
  const generator = userSaga();

  it("should wait for every FETCH_USER_REQUEST action and call fetchUsersSaga", () => {
    expect(generator.next().value).toEqual(
      takeEvery(UserActionTypes.FETCH_USER_REQUEST, fetchUsersSaga)
    );
  });

  it("should wait for every CREATE_USER_REQUEST action and call createUsersSaga", () => {
    expect(generator.next().value).toEqual(
      takeEvery(UserActionTypes.CREATE_USER_REQUEST, createUsersSaga)
    );
  });

  it("should be done on next iteration", () => {
    expect(generator.next().done).toBeTruthy();
  });
});

//Testing fetchUsersSaga

// describe("fetchUsersSaga", () => {
//   it("should call api and dispatch success action", async () => {
//     const dummyUsers = [
//       {
//         id: 1,
//         fname: "Jane",
//         lname: "Doe",
//         email: "jane.doe@verizon.com",
//         vzid: "doeja",
//         workType: "FiOS",
//         roleType: "Author",
//       },
//     ];
//     const mockGetUsers = jest
//       .spyOn(axios, "get")
//       .mockImplementation(() => Promise.resolve({ users: dummyUsers }));

//     const dispatched: any = [];

//     const result = await runSaga(
//       {
//         dispatch: (action) => dispatched.push(action),
//       },
//       fetchUsersSaga
//     );
//     console.log(dummyUsers);
//     expect(mockGetUsers).toHaveBeenCalledTimes(1);
//     expect(dispatched).toEqual([fetchUsersSuccess({ users: dummyUsers })]);
//     mockGetUsers.mockClear();
//   });
// });

