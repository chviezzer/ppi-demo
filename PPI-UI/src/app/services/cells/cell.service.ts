import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {
  BehaviorSubject,
  catchError,
  combineLatest,
  map,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { CellLine } from 'src/app/views/cells/interfaces/cells.interface';
import { CancerTypeService } from '../cancer-type/cancer-type.service';

@Injectable({
  providedIn: 'root',
})
export class CellService {
  private cellsUrl = 'api/cells';

  constructor(
    private http: HttpClient,
    private cancerTypeService: CancerTypeService
  ) {}

  cells$ = this.http.get<CellLine[]>(this.cellsUrl).pipe(
    // tap((data) => console.log('Cells: ', JSON.stringify(data))),  #for debug.
    catchError(this.handleError)
  );

  cellsWithCancerType$ = combineLatest([
    this.cells$,
    this.cancerTypeService.cancerTypes$,
  ]).pipe(
    map(([cells, cancerTypes]) =>
      cells.map(
        (cell) =>
          ({
            ...cell,
            cancerType: cancerTypes.find((t) => cell.cancerTypeId === t.id)
              ?.name,
            searchKey: [cell.name],
          } as CellLine)
      )
    )
  );

  private cellSelectedSubject = new BehaviorSubject<number>(0);
  cellSelectedAction$ = this.cellSelectedSubject.asObservable();

  selectedCell$ = combineLatest([
    this.cellsWithCancerType$,
    this.cellSelectedAction$,
  ]).pipe(
    map(([cells, selectedCellId]) =>
      cells.find((cell) => cell.id === selectedCellId)
    ),
    tap((cell) => console.log('selectedCells', cell))
  );

  selectedCellChanged(selectedCellId: number): void {
    this.cellSelectedSubject.next(selectedCellId);
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
