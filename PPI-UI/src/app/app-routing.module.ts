import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      {
        path: 'cells',
        loadChildren: () =>
          import('./views/cells/cell.module').then((m) => m.CellModule),
      },
      {
        path: 'proteins',
        loadChildren: () =>
          import('./views/proteins/protein.module').then(
            (m) => m.ProteinModule
          ),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
