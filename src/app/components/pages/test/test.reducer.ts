import { createReducer, on } from "@ngrx/store";
import { TestActions } from "./test.actions";
import { initialTestState, ITestState } from "./test.state";

export const testReducer = createReducer<ITestState>(
  initialTestState,
  on(TestActions.increment, state => ({
    counter: state.counter + 1,
  })),
  on(TestActions.decrement, state => ({
    counter: state.counter - 1,
  })),
  on(TestActions.reset, () => ({
    counter: 0,
  })),
);
