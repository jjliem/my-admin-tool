import { combineReducers } from "redux";
import IAppState from "./IAppState.interface";
import {userReducer} from "./user/reducers/userReducer";


const rootReducer = combineReducers<IAppState>({
  userState: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
