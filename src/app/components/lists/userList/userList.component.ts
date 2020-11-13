import { Component, Input, OnInit } from "@angular/core";
import { IUser } from "../../../interfaces/entries/user";
import { UsersApiRequest } from "../../../api/UsersApiRequest";
import { UsersService } from "../../../services/users.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./userList.component.html",
  styleUrls: ["./userList.component.scss"],
})
export class UserList implements OnInit {
  constructor(private apiService: UsersService) {}
  userList = {};

  async ngOnInit() {
    this.userList = await this.apiService.getList();
    console.log("userList", this.userList);
  }

  @Input() users: IUser;
}
