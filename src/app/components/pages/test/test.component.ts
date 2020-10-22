import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IAppState } from "../../../store/store.modeule";
import { ITestState } from "./testState";

@Component({
  selector: "app-test-page",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestPage {
  state: Observable<ITestState>;

  constructor(private store: Store<IAppState>) {
    this.state = store.select("test");

    console.log("1111111111", this.state);
  }

  increment() {
    // TODO: Dispatch an increment action
  }

  decrement() {
    // TODO: Dispatch a decrement action
  }

  reset() {
    // TODO: Dispatch a reset action
  }
}
