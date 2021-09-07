import {
  ICreateUsersFailure,
  ICreateUsersRequest,
  ICreateUsersSuccess,
  IFetchUsersFailure,
  IFetchUsersRequest,
  IFetchUsersSuccess,
} from "../interface/IUserActions.interface";

export type UserActions =
  | IFetchUsersRequest
  | IFetchUsersSuccess
  | IFetchUsersFailure
  | ICreateUsersRequest
  | ICreateUsersSuccess
  | ICreateUsersFailure;