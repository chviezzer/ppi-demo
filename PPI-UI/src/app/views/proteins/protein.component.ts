import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { catchError, EMPTY, Subject } from 'rxjs';
import { CellService } from 'src/app/services/cells/cell.service';
import { InteractionService } from 'src/app/services/protein-data/interaction.service';
import { ProteinService } from 'src/app/services/protein-data/protein.service';

@Component({
  selector: 'ppi-protein',
  templateUrl: './protein.component.html',
  styleUrls: ['./protein.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProteinComponent {
  pageTitle = `Protein Interactions`;
  sequenceTitle = 'Protein Info';

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(
    private proteinService: ProteinService,
    private cellService: CellService
  ) {}

  proteins$ = this.proteinService.proteins$.pipe(
    catchError((err) => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  genesCellsSelector$ = this.cellService.selectedCellGenes$.pipe(
    catchError((err) => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  selectedCell$ = this.cellService.selectedCell$;
  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
