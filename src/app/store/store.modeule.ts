import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { testReducer } from "../components/pages/test/test.reducer";
import { ITestState } from "../components/pages/test/test.state";

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
