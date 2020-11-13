import { Injectable } from "@angular/core";
import { UsersApiRequest } from "../api/UsersApiRequest";
import { IUser } from "../interfaces/entries/user";
import { IResponse } from "../api/BaseRequest";

@Injectable()
export class UsersService {
  constructor(private usersApiRequest: UsersApiRequest) {}

  getList(): Promise<IResponse<IUser[]>> {
    return this.usersApiRequest.getUsers();
  }
}
