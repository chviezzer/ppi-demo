import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable, shareReplay, tap, catchError } from 'rxjs';
import { BarGeneChart } from 'src/app/views/cells/interfaces/gene-selector.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneSelectorService {
  private genesUrl = 'api/genes';

  constructor(private http: HttpClient) {}

  geneSelectorChart$ = this.http.get<BarGeneChart[]>(this.genesUrl).pipe(
    tap((data) => console.log('genes', JSON.stringify(data))),
    shareReplay(1),
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
