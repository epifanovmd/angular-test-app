import { Component } from "@angular/core";
import { IUser } from "../../../interfaces/entries/user";

@Component({
  selector: "app-users-page",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersPage {
  users = [
    {
      name: "Иванов Иван Иванович",
      age: 25,
      email: "ivanov@ivan.com",
    },
    {
      name: "Петров Петр Петрович",
      age: 40,
      email: "petrov@petr.com",
    },
  ] as IUser[];
}
