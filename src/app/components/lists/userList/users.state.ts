import { IUser } from "../../../interfaces/entries/user";

export interface IUsersState {
  list: IUser[];
}

export const initialUsersState: IUsersState = {
  list: [],
};
