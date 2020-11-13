import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { RequestType } from "./requestType";
import { IEmpty } from "../interfaces/common/IEmpty";

export interface IResponse<R> {
  data: R;
  status: number;
  error?: Error;
  message?: string;
}

export interface IFetchParams<R> {
  url: string;
  method: RequestType;
  headers?: { [key: string]: string };
  transformData?: (result: R) => R;
  onSuccess?: (result: R) => R;
  onFail?: (error?: Error) => void;
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
  protected constructor(protected http: HttpClient) {}

  async fetch<R, P>({
    url,
    method,
    headers,
    transformData,
    onSuccess,
    onFail,
  }: IFetchParams<R>): Promise<any> {
    try {
      const res = await this.http
        .request<any>(method, url, {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
          },
        })
        .toPromise<HttpResponse<any>>();

      const json = (res || {}) as R;
      const status = res.status;

      if (status >= 400 || json === null) {
        onFail &&
          onFail(new Error((json as any)?.message || status.toString()));
        throw new Error((json as any)?.message || status.toString());
      } else {
        const transformedResult = transformData ? transformData(json) : json;

        onSuccess && onSuccess(transformedResult);

        return { data: transformedResult, status };
      }
    } catch (error) {
      onFail && onFail(new Error(error.message || 500));

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
}
