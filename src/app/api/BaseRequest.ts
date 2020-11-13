import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from "@angular/common/http";
import { RequestType } from "./requestType";
import { IEmpty } from "../interfaces/common/IEmpty";
import { IAppState } from "../store/store.module";
import { Store } from "@ngrx/store";
import { AsyncActionCreators } from "typescript-fsa";

export interface IResponse<R> {
  data: R;
  status: number;
  error?: Error;
  message?: string;
}

export interface IFetchParams<P, R> {
  params: P;
  url: string;
  method: RequestType;
  headers?: { [key: string]: string };
  actions: AsyncActionCreators<P, R, Error>;
  onSuccess?: (result: IResponse<R>) => void;
  onFail?: (error: Error) => void;
}

@Injectable()
export abstract class BaseRequest {
  protected static httpOptions = {
    headers: new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    }),
  };

  // eslint-disable-next-line no-empty-function
  protected constructor(
    protected http: HttpClient,
    protected store: Store<IAppState>,
  ) {}

  async fetch<R, P>({
    url,
    params = {},
    method = RequestType.GET,
    headers = {},
  }: {
    url: string;
    params?: P | IEmpty;
    method: RequestType;
    headers?: { [key: string]: string };
  }): Promise<any> {
    const body =
      method !== RequestType.GET ? { body: JSON.stringify(params) } : {};

    const hasParams = Object.keys(params).length > 0;

    const httpParams = new HttpParams();

    if (hasParams) {
      // eslint-disable-next-line guard-for-in
      for (const key in params as P) {
        httpParams.set(key, (params as P)[key as any]);
      }
    }

    const urlResult =
      method !== RequestType.GET
        ? `/api/${url}`
        : `/api/${url}${hasParams ? "?" : ""}${httpParams.toString()}`;

    try {
      const res = await this.http
        .request<any>(method, urlResult, {
          withCredentials: true,
          ...body,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
          },
        })
        .toPromise<HttpResponse<any>>();

      const json = (await res) || {};
      const status = res.status;

      return { data: json as any, status };
    } catch (error) {
      return {
        data: {} as R,
        status: 500,
        error: error as Error,
        message: error.message,
      };
    }
  }

  static handleError = (error: any): Promise<any> =>
    Promise.reject(error.message || error);

  async callApi<P, R>({
    params,
    url,
    method,
    headers,
    actions,
    onSuccess,
    onFail,
  }: IFetchParams<P, R>) {
    this.store.dispatch(actions.started(params));

    const { data, status, message } = await this.fetch<P, R>({
      url,
      params,
      method,
      headers,
    });

    if (status >= 400 || data === null) {
      const error = {
        name: status.toString(),
        message: message || status.toString(),
      };

      this.store.dispatch(
        actions.failed({
          params,
          error,
        }),
      );
      onFail && onFail(error);
    } else {
      this.store.dispatch(
        actions.done({
          params,
          result: {
            data,
            message,
            status,
          } as any,
        }),
      );
      onSuccess &&
        true &&
        onSuccess({
          data,
          message,
          status,
        });
    }
  }
}
