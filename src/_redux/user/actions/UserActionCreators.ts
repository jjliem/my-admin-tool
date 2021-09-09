import { UserActionTypes } from "./UserActionTypes.enum";
import {IUser,
  IFetchUsersFailure,
  IFetchUsersRequest,
  IFetchUsersSuccess,
  ICreateUsersFailure,
  ICreateUsersRequest,
  ICreateUsersSuccess,
  IFetchUsersSuccessPayload,
  IFetchUsersFailurePayload,
} from "../interface/IUser.interface";

// Actions are plain objects that represent intention to change the state

// CREATE USER ACTIONS --------------------------------------------------------

export const createUsersRequest = (user: IUser): ICreateUsersRequest => ({
  type: UserActionTypes.CREATE_USER_REQUEST,
  user,
});

export const createUsersSuccess = (user: IUser): ICreateUsersSuccess => ({
  type: UserActionTypes.CREATE_USER_SUCCESS,
  user,
});

export const createUsersFailure = (error: string): ICreateUsersFailure => ({
  type: UserActionTypes.CREATE_USER_FAILURE,
  error,
});

// FETCH ACTIONS --------------------------------------------------------

export const fetchUsersRequest = (): IFetchUsersRequest => ({
  type: UserActionTypes.FETCH_USER_REQUEST,
});

export const fetchUsersSuccess = (
  payload: IFetchUsersSuccessPayload
): IFetchUsersSuccess => ({
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload,
});

export const fetchUsersFailure = (
  payload: IFetchUsersFailurePayload
): IFetchUsersFailure => ({
  type: UserActionTypes.FETCH_USER_FAILURE,
  payload,
});

export type UserActions =
  | IFetchUsersRequest
  | IFetchUsersSuccess
  | IFetchUsersFailure
  | ICreateUsersRequest
  | ICreateUsersSuccess
  | ICreateUsersFailure;