import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {
  BehaviorSubject,
  catchError,
  combineLatest,
  filter,
  forkJoin,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { CellLine } from 'src/app/views/cells/interfaces/cells.interface';
import { CancerTypeService } from '../cancer-type/cancer-type.service';
import { GeneSelectorService } from '../gene-selector/gene-selector.service';

@Injectable({
  providedIn: 'root',
})
export class CellService {
  private cellsUrl = 'api/cells';
  //  private genesUrl = 'api/genes';

  private cellSelectedSubject = new BehaviorSubject<number>(0);
  cellSelectedAction$ = this.cellSelectedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private cancerTypeService: CancerTypeService,
    private geneSelectorService: GeneSelectorService
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
    ),
    shareReplay(1)
  );

  selectedCell$ = combineLatest([
    this.cellsWithCancerType$,
    this.cellSelectedAction$,
  ]).pipe(
    map(([cells, depmapIds]) => cells.find((cell) => cell.id === depmapIds)),
    tap((cell) => console.log('selectedCells', cell)),
    shareReplay(1)
  );

  selectedCellGenes$ = combineLatest([
    this.selectedCell$,
    this.geneSelectorService.geneSelectorChart$,
  ]).pipe(
    map(([selectedCell, geneSelected]) =>
      geneSelected.filter((gene) => selectedCell?.geneIds?.includes(gene.id))
    )
  );

  // selectedCellGenes$ = this.selectedCell$.pipe(
  //   filter((cell) => Boolean(cell)),
  //   switchMap((selectedCell) => {
  //     if (selectedCell?.geneIds) {
  //       return forkJoin(
  //         selectedCell.geneIds.map((geneId) =>
  //           this.http.get<BarGeneChart>(`${this.genesUrl}/${geneId}`)
  //         )
  //       );
  //     } else {
  //       return of([]);
  //     }
  //   }),
  //   tap((selectedGenes) =>
  //     console.log('gene table', JSON.stringify(selectedGenes))
  //   )
  // );

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
