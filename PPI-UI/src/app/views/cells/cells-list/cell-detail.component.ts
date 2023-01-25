/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, EMPTY, Subject } from 'rxjs';

import { CellService } from '../../../services/cells/cell.service';

@Component({
  selector: 'ppi-cell-detail',
  templateUrl: './cell-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellDetailComponent {
  pageTitle = 'Cell Detail';
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private cellService: CellService) {}

  cell$ = this.cellService.selectedCell$.pipe(
    catchError((err) => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  genesBarChart$ = this.cellService.selectedCellGenes$.pipe(
    catchError((err) => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );
}
