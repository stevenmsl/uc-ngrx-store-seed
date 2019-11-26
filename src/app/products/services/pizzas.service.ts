import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  HttpErrorHandler,
  HandleError
} from "../../http-error-handler.service";
import { Observable } from "rxjs";
import { Pizza } from "../models/pizza.model";
import { catchError } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class PizzasService {
  pizzasUrl = "api/pizzas";
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError("PizzasService");
  }

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(this.pizzasUrl, httpOptions)
      .pipe(catchError(this.handleError<Pizza[]>("getPizzas", [])));
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(this.pizzasUrl, payload)
      .pipe(catchError(this.handleError("createPizza", payload)));
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`${this.pizzasUrl}/${payload.id}`, payload)
      .pipe(catchError(this.handleError("updatePizza", payload)));
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`${this.pizzasUrl}/${payload.id}`)
      .pipe(catchError(this.handleError("updatePizza", payload)));
  }
}
