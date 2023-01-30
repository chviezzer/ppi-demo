import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
 

import { SharedModule } from '../../shared/shared.module';
import { CellShellComponent } from './cell-shell.component';
import { CellDetailComponent } from './cells-list/cell-detail.component';
import { CellListComponent } from './cells-list/cell-list.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GeneChartComponent } from './gene-chart/gene-chart.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CellShellComponent,
      },
    ]),
  ],
  declarations: [CellShellComponent, CellListComponent, CellDetailComponent, GeneChartComponent],
})
export class CellModule {}
