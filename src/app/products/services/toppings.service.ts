import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  HttpErrorHandler,
  HandleError
} from "../../http-error-handler.service";
import { Observable } from "rxjs";
import { Topping } from "../models/topping.model";
import { catchError } from "rxjs/operators";

/*
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
*/

@Injectable()
export class ToppingsService {
  toppingsUrl = "/api/toppings";
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError("ToppingsService");
  }

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(this.toppingsUrl)
      .pipe(catchError(this.handleError<Topping[]>("getToppings", [])));
  }
}
