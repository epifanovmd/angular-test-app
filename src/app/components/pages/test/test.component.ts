import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IAppState } from "../../../store/store.modeule";
import { TestActions } from "./test.actions";

@Component({
  selector: "app-test-page",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestPage {
  counter: Observable<number>;
  title: string = "My Title";

  constructor(private store: Store<IAppState>) {
    this.counter = store.select("test", "counter");
  }

  onChangeValue(value: string) {
    this.title = value;
  }

  increment() {
    this.store.dispatch(TestActions.increment());
  }

  decrement() {
    this.store.dispatch(TestActions.decrement());
  }

  reset() {
    this.store.dispatch(TestActions.reset());
  }
}
