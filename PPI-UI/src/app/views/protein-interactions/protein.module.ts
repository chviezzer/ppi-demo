import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProteinInteractionsComponent } from './protein-interaction.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProteinInteractionsComponent,
      },
    ]),
  ],
  declarations: [ProteinInteractionsComponent],
})
export class ProteinModule {}
