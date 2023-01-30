import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError, tap, shareReplay } from 'rxjs';
import { ProteinsInteraction } from 'src/app/shared/interfaces/protein-data.interface';
 
@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  private interactionUrl = 'api/interaction';
  constructor(private http: HttpClient) {}

  interactions$ = this.http
    .get<ProteinsInteraction[]>(this.interactionUrl)
    .pipe(
      tap((data) => console.log('interactions: ', JSON.stringify(data))),
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
