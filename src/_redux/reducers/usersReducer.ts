import { userTypes } from "../actiontypes/userTypes";
import { UsersActions, UsersState } from "../types/usersTypes";

const initialState: UsersState = {
  pending: false,
  users: [],
  error: null,
};

export default (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case userTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
        error: null,
      };
    case userTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
