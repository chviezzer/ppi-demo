/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { catchError, EMPTY, Subject } from 'rxjs';
import { CellService } from '../../../services/cells/cell.service';
 @Component({
   selector: 'ppi-cell-list',
   templateUrl: './cell-list.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
 })
 export class CellListComponent {
   pageTitle = 'Cancer Cells';
   private errorMessageSubject = new Subject<string>();
   errorMessage$ = this.errorMessageSubject.asObservable();

   constructor(private cellService: CellService) {}

   cells$ = this.cellService.cellsWithCancerType$.pipe(
     catchError((err) => {
       this.errorMessageSubject.next(err);
       return EMPTY;
     })
   );

   selectedCell$ = this.cellService.selectedCell$;

   onSelected(cellId: number): void {
     this.cellService.selectedCellChanged(cellId);
   }
 }
