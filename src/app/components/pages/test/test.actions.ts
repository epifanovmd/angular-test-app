import { createAction } from "@ngrx/store";

export const TestActions = {
  increment: createAction("Increment"),
  decrement: createAction("Decrement"),
  reset: createAction("Reset"),
};
