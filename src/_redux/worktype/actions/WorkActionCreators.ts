import { WorkActionTypes } from "./WorkActionTypes.enum";
import {
  IWork,
  IGetWorkFailure,
  IGetWorkRequest,
  IGetWorkSuccess,

} from "../models/IWork.interface";

// Actions are plain objects that represent intention to change the state

// GET WORK ACTIONS --------------------------------------------------------

export const getWorkRequest = (): IGetWorkRequest => ({
  type: WorkActionTypes.GET_WORK_REQUEST,
});

export const getWorkSuccess = (workTypes: IWork[]): IGetWorkSuccess => ({
  type: WorkActionTypes.GET_WORK_SUCCESS,
  workTypes,
});

export const getWorkFailure = (error: string): IGetWorkFailure => ({
  type: WorkActionTypes.GET_WORK_FAILURE,
  error,
});


export type WorkActions =
  | IGetWorkRequest
  | IGetWorkSuccess
  | IGetWorkFailure;
