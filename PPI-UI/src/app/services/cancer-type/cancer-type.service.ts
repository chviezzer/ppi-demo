import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError, Observable, catchError, tap } from 'rxjs';

import { CancerType } from './interfaces/cancer-type.interface';

@Injectable({
  providedIn: 'root',
})
export class CancerTypeService {
  private cancerUrl = 'api/cancerType';
  constructor(private http: HttpClient) {}

  cancerTypes$ = this.http.get<CancerType[]>(this.cancerUrl).pipe(
    // tap((data) => console.log('Cells: ', JSON.stringify(data))),  #for debug.
    catchError(this.handleError)
  );

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
