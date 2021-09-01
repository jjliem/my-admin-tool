import { IUser } from "./IUser";
import { userTypes } from "../actiontypes/userTypes";

export interface UsersState {
  pending: boolean;
  users: IUser[];
  error: string | null;
}

// CREATE USER INTERFACES -----------------------------------------------------------

export interface CreateUsersSuccessPayload {
  user: IUser;
}

export interface CreateUsersFailurePayload {
  error: string;
}

export interface CreateUsersRequest {
  type: typeof userTypes.CREATE_USER_REQUEST;
  user: IUser;
}

export type CreateUsersSuccess = {
  type: typeof userTypes.CREATE_USER_SUCCESS;
  payload: CreateUsersSuccessPayload;
};

export type CreateUsersFailure = {
  type: typeof userTypes.CREATE_USER_FAILURE;
  payload: CreateUsersFailurePayload;
};

// FETCH INTERFACES -----------------------------------------------------------
export interface FetchUsersSuccessPayload {
  users: IUser[];
}

export interface FetchUsersFailurePayload {
  error: string;
}

export interface FetchUsersRequest {
  type: typeof userTypes.FETCH_USER_REQUEST;
}

export type FetchUsersSuccess = {
  type: typeof userTypes.FETCH_USER_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export type FetchUsersFailure = {
  type: typeof userTypes.FETCH_USER_FAILURE;
  payload: FetchUsersFailurePayload;
};

export type UsersActions =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure
  | CreateUsersRequest
  | CreateUsersSuccess
  | CreateUsersFailure;
