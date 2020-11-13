import { Component, Input, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { IUser } from "../../../interfaces/entries/user";
import { UsersService } from "../../../services/users.service";
import { IAppState } from "../../../store/store.module";
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
  ) {
    this.loading = store.select("users", "loading")
    this.userList = store.select("users", "list");
  }
  userList: Observable<IUser[]>;
  loading: Observable<boolean>;

  async ngOnInit() {
    await this.apiService.getListAsync();
  }
}
