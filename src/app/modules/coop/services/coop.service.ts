// COOP SERVICE
/* Used in  coop/pages/index/main/main.component.ts */

/**
 * Import Angular Dependancies
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

/**
 * Import Project's Interfaces
 */
import { CoopInterface } from '../interfaces/coop';
@Injectable({
  providedIn: 'root'
})

export class CoopService {

  private apiURL = "http://127.0.0.1:8000/api"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  get(): Observable<CoopInterface[]> {
    return this.httpClient.get<CoopInterface[]>(this.apiURL + '/coops/', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/coops/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(coop: CoopInterface): Observable<any> {
    return this.httpClient.post(this.apiURL + '/coops', JSON.stringify(coop), this.httpOptions)
  }

  update(id: number, coop: CoopInterface): Observable<any> {
    return this.httpClient.put(this.apiURL + '/coops/' + id, JSON.stringify(coop), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/coops/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }






  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
