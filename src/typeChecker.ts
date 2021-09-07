import { IUser } from "./_redux/user/interface/IUser.interface";

export function isUser(user: any): user is IUser {
  if (typeof user.fname === String) {
    return user as IUser;
  }
}








