import { NgModule } from "@angular/core";
import { ActionReducer, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { testReducer } from "../components/pages/test/testReducer";
import { ITestState } from "../components/pages/test/testState";
import { IUsersState } from "../components/lists/userList/usersState";
import { usersReducer } from "../components/lists/userList/usersReducer";

export interface IAppState {
  test: ITestState;
  users: IUsersState;
}

export type Reducers<T> = {
  [P in keyof T]: ActionReducer<T[P]>;
};

const reducers: Reducers<IAppState> = {
  test: testReducer,
  users: usersReducer,
};

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class AppStoreModule { }
