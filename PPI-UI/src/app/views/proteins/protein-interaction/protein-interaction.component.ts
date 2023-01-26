import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, EMPTY, Subject } from 'rxjs';
import { InteractionService } from 'src/app/services/protein-data/interaction.service';

@Component({
  selector: 'ppi-interaction',
  templateUrl: './protein-interaction.component.html',
  styleUrls: ['./protein-interaction.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProteinInteractionsComponent {
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private interactionService: InteractionService) {}

  interactions$ = this.interactionService.interactions$.pipe(
    catchError((err) => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );
}
