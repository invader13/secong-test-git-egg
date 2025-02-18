import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConvertApiResponse, ConvertValue, HTTP_JSON_OPTIONS} from "../utils";
import {lastValueFrom} from "rxjs";
import {ApiResponse} from "../models/api-response";
// import {ToasterPosition} from "../enums/toaster-position";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    // private toaster: ToasterService
  ) { }

    /**
     Realiza una llama al api regresando un objeto del tipo "ApiResponse" y convierte el resultado al
     tipo deseado "T"
     **/
    async ExecuteApiCall<T>(urlMethod: string, request: any | null = null): Promise<T> {
        let result: T | PromiseLike<T>;
        try {
            let response = await lastValueFrom(this.http.post<T>(urlMethod, request, HTTP_JSON_OPTIONS));
            if (!response) {
                // @ts-ignore
                console.log(response.result.error);
                // this.toaster.warning(response.result.error, "", ToasterPosition.bottomCenter);
                // @ts-ignore
                throw new Error(response.result.error);
            }
          result = ConvertValue<T>(response);
          return result;
        } catch (error) {
            // @ts-ignore
            console.log(error);
            // @ts-ignore
            throw new Error('Ha ocurrido un problema al realizar la operación');
        }
    }

}
