import { Component, Input } from "@angular/core";
import { IUser } from "../../../interfaces/entries/user";
import { UsersApiRequest } from "../../../api/UsersApiRequest";
import { UsersService } from "../../../services/users.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./userList.component.html",
  styleUrls: ["./userList.component.scss"],
})
export class UserList {
  constructor(private apiService: UsersService) {
    apiService.getList();
  }
  @Input() users: IUser;
}
