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

// GET USER INTERFACES -----------------------------------------------------------

export type IGetUserRequest = {
  type: typeof UserActionTypes.GET_USER_REQUEST;
};

export type IGetUserSuccess = {
  type: typeof UserActionTypes.GET_USER_SUCCESS;
  users: IUser[];
};

export type IGetUserFailure = {
  type: typeof UserActionTypes.GET_USER_FAILURE;
  error: string;
};

// POST USER INTERFACES -----------------------------------------------------------

export type IPostUserRequest = {
  type: typeof UserActionTypes.POST_USER_REQUEST;
  user: IUser;
};

export type IPostUserSuccess = {
  type: typeof UserActionTypes.POST_USER_SUCCESS;
  user: IUser;
};

export type IPostUserFailure = {
  type: typeof UserActionTypes.POST_USER_FAILURE;
  error: string;
};
