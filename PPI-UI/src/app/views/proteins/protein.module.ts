import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProteinInteractionsComponent } from './protein-interaction/protein-interaction.component';
import { ProteinComponent } from './protein.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProteinComponent,
      },
      {
        path: 'interactions',
        component: ProteinInteractionsComponent,
      },
    ]),
  ],
  declarations: [ProteinInteractionsComponent, ProteinComponent],
})
export class ProteinModule {}
