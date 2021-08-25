import { userTypes } from "../actiontypes/userTypes";
import {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
} from "../types/usersTypes";

export const fetchUsersRequest = (): FetchUsersRequest => ({
  type: userTypes.FETCH_USER_REQUEST,
});

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
