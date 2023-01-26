import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {
  throwError,
  Observable,
  catchError,
  map,
  combineLatest,
  shareReplay,
  BehaviorSubject,
} from 'rxjs';
import { Protein } from 'src/app/views/proteins/interfaces/protein-info.interface';
import { InteractionService } from './interaction.service';

@Injectable({
  providedIn: 'root',
})
export class ProteinService {
  private proteinUrl = 'api/proteins';
  private interactionUrl = 'api/interaction';

  constructor(
    private http: HttpClient,
    private interactionService: InteractionService
  ) {}

  proteins$ = this.http.get<Protein[]>(this.proteinUrl).pipe(
    map((proteins) => proteins),
    // tap((data) => console.log('Proteins: ', JSON.stringify(data))),  #for debug.
    catchError(this.handleError)
  );

  proteinInteractios$ = combineLatest([
    this.proteins$,
    this.interactionService.interactions$,
  ]).pipe(
    map(([proteins, interactions]) =>
      proteins.map(
        (protein) =>
          ({
            ...protein,
            interact: interactions.find(
              (i) => protein.accession === i.accession
            )?.name,
          } as Protein)
      )
    ),
    shareReplay(1)
  );

  private proteinSelectedSubject = new BehaviorSubject<string>('');
  proteinSelectedAction$ = this.proteinSelectedSubject.asObservable();

  selectedProtein$ = combineLatest([
    this.proteinInteractios$,
    this.proteinSelectedAction$,
  ]).pipe(
    map(([proteins, selectedProtein]) =>
      proteins.find((protein) => protein.accession === selectedProtein)
    ),
    shareReplay(1)
  );

  selectedCellChanged(selectedGene: string): void {
    this.proteinSelectedSubject.next(selectedGene);
  }
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
