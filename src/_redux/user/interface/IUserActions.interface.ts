import { IUser } from "./IUser.interface";
import { UserActionTypes } from "../actions/UserActionTypes.enum";

// CREATE USER INTERFACES -----------------------------------------------------------

export interface ICreateUsersRequest {
  type: typeof UserActionTypes.CREATE_USER_REQUEST;
  user: IUser;
}

export type ICreateUsersSuccess = {
  type: typeof UserActionTypes.CREATE_USER_SUCCESS;
  user: IUser;
};

export type ICreateUsersFailure = {
  type: typeof UserActionTypes.CREATE_USER_FAILURE;
  error: string;
};

// FETCH INTERFACES -----------------------------------------------------------
export interface IFetchUsersRequest {
  type: typeof UserActionTypes.FETCH_USER_REQUEST;
}

export interface IFetchUsersSuccessPayload {
  users: IUser[];
}

export interface IFetchUsersFailurePayload {
  error: string;
}

export type IFetchUsersSuccess = {
  type: typeof UserActionTypes.FETCH_USER_SUCCESS;
  payload: IFetchUsersSuccessPayload;
};

export type IFetchUsersFailure = {
  type: typeof UserActionTypes.FETCH_USER_FAILURE;
  payload: IFetchUsersFailurePayload;
};
