import { Reducer } from "redux";
import { UserActions } from "../actions/UserActions.type";
import { UserActionTypes } from "../actions/UserActionTypes.enum";
import { IUser } from "../interface/IUser.interface";
import { IUserState } from "../interface/IUserState.interface";

const initialState: IUserState = {
  pending: false,
  users: [],
  error: null,
};

// Reducer is a function that accepts state and action and returns a new state
export const userReducer: Reducer<IUserState, UserActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case UserActionTypes.FETCH_USER_SUCCESS:
      console.log("fetch user success action.users: " + action.users);
      return {
        ...state,
        pending: false,
        users: action.users,
        error: null,
      };
    case UserActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case UserActionTypes.CREATE_USER_REQUEST:
      console.log(action.user);
      return {
        ...state,
        pending: true,
      };
    case UserActionTypes.CREATE_USER_SUCCESS:
      const newUser: IUser = {
        id: action.user.id,
        fname: action.user.fname,
        lname: action.user.lname,
        email: action.user.email,
        vzid: action.user.vzid,
        workType: action.user.workType,
        roleType: action.user.roleType,
      };
      return {
        ...state,
        pending: false,
        users: state.users.concat(newUser),
        error: null,
      };
    case UserActionTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
