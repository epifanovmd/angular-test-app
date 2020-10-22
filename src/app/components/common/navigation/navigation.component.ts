import { Component } from "@angular/core";
import {
  INavigationItem,
  routeLinks,
} from "../../../core/routes/app-routing.module";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  navigation: INavigationItem[];

  constructor() {
    this.navigation = routeLinks;
  }
}
