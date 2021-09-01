import { userTypes } from "../actiontypes/userTypes";
import { IUser } from "../types/IUser";
import {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
  CreateUsersFailure,
  CreateUsersFailurePayload,
  CreateUsersRequest,
  CreateUsersSuccess,
  CreateUsersSuccessPayload,
} from "../types/usersTypes";

// Actions are plain objects that represent intention to change the state

// CREATE USER ACTIONS --------------------------------------------------------

export const createUsersRequest = (user: IUser): CreateUsersRequest => ({
  type: userTypes.CREATE_USER_REQUEST,
  user,
});

export const createUsersSuccess = (
  payload: CreateUsersSuccessPayload
): CreateUsersSuccess => ({
  type: userTypes.CREATE_USER_SUCCESS,
  payload,
});

export const createUsersFailure = (
  payload: CreateUsersFailurePayload
): CreateUsersFailure => ({
  type: userTypes.CREATE_USER_FAILURE,
  payload,
});

// FETCH ACTIONS --------------------------------------------------------

export const fetchUsersRequest = (): FetchUsersRequest => ({
  type: userTypes.FETCH_USER_REQUEST,
});

// Actions are plain objects that represent intention to change the state
export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: userTypes.FETCH_USER_SUCCESS,
  payload,
});

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: userTypes.FETCH_USER_FAILURE,
  payload,
});
