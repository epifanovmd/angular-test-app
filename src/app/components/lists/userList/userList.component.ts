import { Component, Input, OnInit } from "@angular/core";
import { IUser } from "../../../interfaces/entries/user";
import { UsersService } from "../../../services/users.service";
import { IAppState } from "../../../store/store.modeule";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-users-list",
  templateUrl: "./userList.component.html",
  styleUrls: ["./userList.component.scss"],
})
export class UserList implements OnInit {
  constructor(
    private apiService: UsersService,
    private store: Store<IAppState>,
  ) {}
  userList = {};

  async ngOnInit() {
    // this.userList = await this.apiService.getList();
    this.userList = await this.apiService.getListAsync();
    console.log("userList", this.userList);
  }

  @Input() users: IUser;
}
