import { IUser } from "../../../interfaces/entries/user";

export interface IUsersState {
  list: IUser[];
  loading: boolean;
}

export const initialUsersState: IUsersState = {
  list: [],
  loading: false,
};
