import { createReducer, on } from "@ngrx/store";
import { UsersActions } from "./users.actions";
import { initialUsersState, IUsersState } from "./users.state";

export const testReducer = createReducer<IUsersState>(
  initialUsersState,
  on(UsersActions.getList.started, (state, { payload }) => ({
    list: [],
  })),
  on(UsersActions.getList.done, (state, { payload }) => ({
    list: payload.result.data,
  })),
  on(UsersActions.getList.failed, () => ({
    list: [],
  })),
);
