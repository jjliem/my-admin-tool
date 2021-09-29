import { call, put, takeEvery } from "redux-saga/effects";
import { getWorkSaga, getWork, workSaga } from "./workSaga";
import { WorkActionTypes } from "../actions/WorkActionTypes.enum";
import { getWorkFailure, getWorkSuccess } from "../actions/WorkActionCreators";
import { IWork } from "../models/IWork.interface";

// Testing Watcher Saga
describe("workSaga watches for actions", () => {
  const generator = workSaga();

  it("should wait for every GET_WORK_REQUEST action and call getWorksSaga", () => {
    expect(generator.next().value).toEqual(
      takeEvery(WorkActionTypes.GET_WORK_REQUEST, getWorkSaga)
    );
  });

  it("should be done on next iteration", () => {
    expect(generator.next().done).toBeTruthy();
  });
});

// Testing getWorkSaga
describe("getWorkSaga", () => {
  it("success triggers success action with works", () => {
    const generator = getWorkSaga();
    const mockResponse = {
      status: 200,
      data: [
        {
          id: 1,
          title: "FiOS",
        },
      ],
    };

    expect(generator.next().value).toEqual(call(getWork));
    expect(generator.next(mockResponse).value).toEqual(
      put(getWorkSuccess(mockResponse.data))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });

  it("failure triggers failure action", async () => {
    const generator = getWorkSaga();
    expect(generator.next().value).toEqual(call(getWork));
    expect(generator.throw("error").value).toEqual(
      put(getWorkFailure("error"))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});
