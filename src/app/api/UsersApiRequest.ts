import { Injectable } from "@angular/core";
import { BaseRequest } from "./BaseRequest";
import { IUser } from "../interfaces/entries/user";
import { RequestType } from "./requestType";

@Injectable()
export class UsersApiRequest extends BaseRequest {
  getUsers(): Promise<IUser[]> {
    return this.fetch({
      url: "api/admin/settings/getCards",
      method: RequestType.GET,
    })
      .then(response => response)
      .catch(BaseRequest.handleError);
  }
}
