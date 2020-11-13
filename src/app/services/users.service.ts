import { Injectable } from "@angular/core";
import { UsersApiRequest } from "../api/UsersApiRequest";
import { IUser } from "../interfaces/entries/user";

@Injectable()
export class UsersService {
  constructor(private usersApiRequest: UsersApiRequest) {}

  getList(): Promise<IUser[]> {
    return this.usersApiRequest.getUsers();
  }
}
