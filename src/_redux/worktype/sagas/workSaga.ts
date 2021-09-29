import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { IWork } from "../models/IWork.interface";
import {
  getWorkSuccess,
  getWorkFailure,
} from "../actions/WorkActionCreators";
import { WorkActionTypes } from "../actions/WorkActionTypes.enum";

// Request Functions
export const getWork = () => axios.get<IWork[]>("http://localhost:5000/works");

export const postWork = (dataToPost: IWork) => {
  return axios.post<IWork>("http://localhost:5000/works", dataToPost);
};

// Worker function that performs the task
export function* getWorkSaga() {
  try {
    const response = yield call(getWork);
    console.log("getWorks response: " + response.data);
    yield put(getWorkSuccess(response.data));
  } catch (e) {
    yield put(getWorkFailure("error"));
  }
}

// Watcher function that listens for post work actions
export function* workSaga(): Generator<any> {
  yield takeEvery(WorkActionTypes.GET_WORK_REQUEST, getWorkSaga);
}
