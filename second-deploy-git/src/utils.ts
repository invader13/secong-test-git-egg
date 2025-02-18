import {ApiResponse} from "./models/api-response";
import {HttpHeaders} from "@angular/common/http";

export function ConvertApiResponse<T>(value: ApiResponse): T {
  if (!value.result.status) {
    console.log(value.result.error);
  }
  return ConvertValue<T>(value.data);

}

export const ConvertValue = <T>(value: any): T => JSON.parse(JSON.stringify(value)) as T;

export const HTTP_JSON_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
