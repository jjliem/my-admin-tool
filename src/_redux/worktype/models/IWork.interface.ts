import { WorkActionTypes } from "../actions/WorkActionTypes.enum";

export interface IWork {
  id: number;
  title: string;
}

export interface IWorkState {
  workPending: boolean;
  workTypes: IWork[];
  workError: string | null;
}

// GET WORK INTERFACES -----------------------------------------------------------

export type IGetWorkRequest = {
  type: typeof WorkActionTypes.GET_WORK_REQUEST;
};

export type IGetWorkSuccess = {
  type: typeof WorkActionTypes.GET_WORK_SUCCESS;
  workTypes: IWork[];
};

export type IGetWorkFailure = {
  type: typeof WorkActionTypes.GET_WORK_FAILURE;
  error: string;
};
