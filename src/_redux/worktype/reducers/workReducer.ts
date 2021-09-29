import { Reducer } from "redux";
import { WorkActions } from "../actions/WorkActionCreators";
import { WorkActionTypes } from "../actions/WorkActionTypes.enum";
import { IWork, IWorkState } from "../models/IWork.interface";

const initialState: IWorkState = {
  workPending: false,
  workTypes: [],
  workError: null,
};

// Reducer is a function that accepts state and action and returns a new state
export const workReducer: Reducer<IWorkState, WorkActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case WorkActionTypes.GET_WORK_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case WorkActionTypes.GET_WORK_SUCCESS:
      return {
        ...state,
        pending: false,
        workTypes: action.workTypes,
        error: null,
      };
    case WorkActionTypes.GET_WORK_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
