import { IUser } from "./IUser.interface";

export interface IUserState {
  pending: boolean;
  users: IUser[];
  error: string | null;
}
