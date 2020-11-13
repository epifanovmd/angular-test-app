import { createReducer, on } from "@ngrx/store";
import { UsersActions } from "./usersActions";
import { initialUsersState, IUsersState } from "./usersState";

export const usersReducer = createReducer<IUsersState>(
  initialUsersState,
  on(UsersActions.getList.started, (state, { payload }) => ({
    loading: true,
    list: [],
  })),
  on(UsersActions.getList.done, (state, { payload }) => ({
    loading: false,
    list: payload.result.data,
  })),
  on(UsersActions.getList.failed, () => ({
    loading: false,
    list: [],
  })),
);
