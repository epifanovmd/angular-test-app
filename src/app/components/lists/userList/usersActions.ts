import actionCreatorFactory from "typescript-fsa";
import { IEmpty } from "../../../interfaces/common/IEmpty";
import { IResponse } from "../../../api/BaseRequest";
import { IUser } from "../../../interfaces/entries/user";

const actionCreator = actionCreatorFactory("USERS");

export const UsersActions = {
  getList: actionCreator.async<IEmpty, IResponse<IUser[]>, Error>("GET_LIST"),
};
