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
  userList = [];
  // eslint-disable-next-line no-invalid-this
  loading = this.store.select("users", "loading");

  async ngOnInit() {
    // this.userList = await this.apiService.getList();
    await this.apiService.getListAsync();

    this.store.select("users", "list").subscribe(res => (this.userList = res));
  }

  @Input() users: IUser;
}
