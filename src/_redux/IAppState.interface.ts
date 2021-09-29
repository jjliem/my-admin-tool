import { IUserState } from "./user/models/IUser.interface";
import { IWorkState } from "./worktype/models/IWork.interface";

export default interface IAppState {
  users: IUserState;
  workTypes: IWorkState;
}
