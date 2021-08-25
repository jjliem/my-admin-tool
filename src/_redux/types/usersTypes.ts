import { IUser } from "../../interfaces/IUser";
import { userTypes } from "../actiontypes/userTypes";

export interface UsersState {
  pending: boolean;
  users: IUser[];
  error: string | null;
}

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
  | FetchUsersFailure;
