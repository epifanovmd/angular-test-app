import { Injectable } from "@angular/core";
import { BaseRequest, IResponse } from "./BaseRequest";
import { IUser } from "../interfaces/entries/user";
import { RequestType } from "./requestType";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UsersApiRequest extends BaseRequest {
  constructor(http: HttpClient) {
    super(http);
  }

  getUsers(): Promise<IResponse<IUser[]>> {
    return this.fetch({
      url: "api/users",
      method: RequestType.GET,
    })
      .then(response => response)
      .catch(BaseRequest.handleError);
  }
}
