import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./testActions";
import { initialTestState, ITestState } from "./testState";

export const testReducer = createReducer<ITestState>(
  initialTestState,
  on(increment, state => ({
    counter: state.counter + 1,
  })),
  on(decrement, state => ({
    counter: state.counter - 1,
  })),
  on(reset, () => ({
    counter: 0,
  })),
);
