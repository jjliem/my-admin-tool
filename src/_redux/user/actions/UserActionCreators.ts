import { UserActionTypes } from "./UserActionTypes.enum";
import {
  IUser,
  IFetchUserFailure,
  IFetchUserRequest,
  IFetchUserSuccess,
  ICreateUserFailure,
  ICreateUserRequest,
  ICreateUserSuccess,
} from "../models/IUser.interface";

// Actions are plain objects that represent intention to change the state

// FETCH USER ACTIONS --------------------------------------------------------

export const fetchUserRequest = (): IFetchUserRequest => ({
  type: UserActionTypes.FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (users: IUser[]): IFetchUserSuccess => ({
  type: UserActionTypes.FETCH_USER_SUCCESS,
  users,
});

export const fetchUserFailure = (error: string): IFetchUserFailure => ({
  type: UserActionTypes.FETCH_USER_FAILURE,
  error,
});

// CREATE USER ACTIONS --------------------------------------------------------

export const createUserRequest = (user: IUser): ICreateUserRequest => ({
  type: UserActionTypes.CREATE_USER_REQUEST,
  user,
});

export const createUserSuccess = (user: IUser): ICreateUserSuccess => ({
  type: UserActionTypes.CREATE_USER_SUCCESS,
  user,
});

export const createUserFailure = (error: string): ICreateUserFailure => ({
  type: UserActionTypes.CREATE_USER_FAILURE,
  error,
});

export type UserActions =
  | IFetchUserRequest
  | IFetchUserSuccess
  | IFetchUserFailure
  | ICreateUserRequest
  | ICreateUserSuccess
  | ICreateUserFailure;
