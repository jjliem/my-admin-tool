import { UserActionTypes } from "../actions/UserActionTypes.enum";

export interface IUser {
  id: number;
  fname: string;
  lname: string;
  email: string;
  vzid: string;
  workType: string;
  roleType: string;
}

export interface IUserState {
  pending: boolean;
  users: IUser[];
  error: string | null;
}

// FETCH USER INTERFACES -----------------------------------------------------------

export type IFetchUserRequest = {
  type: typeof UserActionTypes.FETCH_USER_REQUEST;
};

export type IFetchUserSuccess = {
  type: typeof UserActionTypes.FETCH_USER_SUCCESS;
  users: IUser[];
};

export type IFetchUserFailure = {
  type: typeof UserActionTypes.FETCH_USER_FAILURE;
  error: string;
};

// CREATE USER INTERFACES -----------------------------------------------------------

export type ICreateUserRequest = {
  type: typeof UserActionTypes.CREATE_USER_REQUEST;
  user: IUser;
};

export type ICreateUserSuccess = {
  type: typeof UserActionTypes.CREATE_USER_SUCCESS;
  user: IUser;
};

export type ICreateUserFailure = {
  type: typeof UserActionTypes.CREATE_USER_FAILURE;
  error: string;
};
