import { userTypes } from "../actiontypes/userTypes";
import { IUser } from "../types/IUser";
import { UsersActions, UsersState } from "../types/usersTypes";

const initialState: UsersState = {
  pending: false,
  users: [],
  error: null,
};

// Reducer is a function that accepts state and action and returns a new state
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
        // users: [],
        error: action.payload.error,
      };
    case userTypes.CREATE_USER_REQUEST:
      console.log(action.user);
      return {
        ...state,
        pending: true,
      };
    case userTypes.CREATE_USER_SUCCESS:
      const newUser: IUser = {
        id: action.payload.user.id,
        fname: action.payload.user.fname,
        lname: action.payload.user.lname,
        email: action.payload.user.email,
        vzid: action.payload.user.vzid,
        workType: action.payload.user.workType,
        roleType: action.payload.user.roleType,
      };
      return {
        ...state,
        pending: false,
        users: state.users.concat(newUser),
        error: null,
      };
    case userTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        pending: false,
        // users: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
