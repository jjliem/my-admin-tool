import { combineReducers } from "redux";
import userReducer from "./usersReducer";


const rootReducer = combineReducers({
  users: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
