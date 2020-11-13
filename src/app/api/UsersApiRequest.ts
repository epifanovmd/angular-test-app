import { Injectable } from "@angular/core";
import { BaseRequest, IResponse } from "./BaseRequest";
import { IUser } from "../interfaces/entries/user";
import { RequestType } from "./requestType";
import { HttpClient } from "@angular/common/http";
import { UsersActions } from "../components/lists/userList/users.actions";
import { IAppState } from "../store/store.modeule";
import { Store } from "@ngrx/store";

@Injectable()
export class UsersApiRequest extends BaseRequest {
  constructor(http: HttpClient, store: Store<IAppState>) {
    super(http, store);
  }

  getUsers(): Promise<IResponse<IUser[]>> {
    return this.fetch({
      url: "users",
      method: RequestType.GET,
    })
      .then(response => response)
      .catch(BaseRequest.handleError);
  }

  getListAsync(): Promise<IResponse<IUser[]>> {
    return this.callApi({
      url: "users",
      params: {},
      method: RequestType.GET,
      actions: UsersActions.getList,
    })
      .then(response => response)
      .catch(BaseRequest.handleError);
  }
}
