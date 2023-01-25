import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './protein-interaction.component.html',
  styleUrls: ['./protein-interaction.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProteinInteractionsComponent {
  pageTitle = 'Protein List';
  sequenceTitle = 'Protein Sequence';
}
