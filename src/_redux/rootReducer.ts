import { combineReducers } from "redux";
import IAppState from "./IAppState.interface";
import { userReducer } from "./user/reducers/userReducer";
import { workReducer } from "./worktype/reducers/workReducer";

const rootReducer = combineReducers<IAppState>({
  users: userReducer,
  workTypes: workReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
