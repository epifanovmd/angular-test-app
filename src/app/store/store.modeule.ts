import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { testReducer } from "../components/pages/test/testReducer";
import { ITestState } from "../components/pages/test/testState";

export interface IAppState {
  test: ITestState;
}

const reducers = {
  test: testReducer,
};

@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot(reducers)],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class AppStoreModule {}
