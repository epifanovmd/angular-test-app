import { Component, Input } from "@angular/core";
import { IUser } from "../../../interfaces/entries/user";

@Component({
  selector: "app-users-list",
  templateUrl: "./userList.component.html",
  styleUrls: ["./userList.component.scss"],
})
export class UserList {
  @Input() users: IUser;
}
