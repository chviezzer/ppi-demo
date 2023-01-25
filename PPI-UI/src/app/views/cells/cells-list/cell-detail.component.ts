/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';

import { CellService } from '../../../services/cells/cell.service';

@Component({
  selector: 'ppi-cell-detail',
  templateUrl: './cell-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellDetailComponent {
  pageTitle = 'Cell Detail';
  errorMessage = '';

  constructor(private cellService: CellService) {}

  cell$ = this.cellService.selectedCell$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
}
