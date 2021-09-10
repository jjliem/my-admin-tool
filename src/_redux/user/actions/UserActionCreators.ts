import { UserActionTypes } from "./UserActionTypes.enum";
import {
  IUser,
  IGetUserFailure,
  IGetUserRequest,
  IGetUserSuccess,
  IPostUserFailure,
  IPostUserRequest,
  IPostUserSuccess,
} from "../models/IUser.interface";

// Actions are plain objects that represent intention to change the state

// GET USER ACTIONS --------------------------------------------------------

export const getUserRequest = (): IGetUserRequest => ({
  type: UserActionTypes.GET_USER_REQUEST,
});

export const getUserSuccess = (users: IUser[]): IGetUserSuccess => ({
  type: UserActionTypes.GET_USER_SUCCESS,
  users,
});

export const getUserFailure = (error: string): IGetUserFailure => ({
  type: UserActionTypes.GET_USER_FAILURE,
  error,
});

// POST USER ACTIONS --------------------------------------------------------

export const postUserRequest = (user: IUser): IPostUserRequest => ({
  type: UserActionTypes.POST_USER_REQUEST,
  user,
});

export const postUserSuccess = (user: IUser): IPostUserSuccess => ({
  type: UserActionTypes.POST_USER_SUCCESS,
  user,
});

export const postUserFailure = (error: string): IPostUserFailure => ({
  type: UserActionTypes.POST_USER_FAILURE,
  error,
});

export type UserActions =
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserFailure
  | IPostUserRequest
  | IPostUserSuccess
  | IPostUserFailure;
