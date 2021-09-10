import { IUserState } from "./user/models/IUser.interface";

export default interface IAppState {
  users: IUserState;
}
