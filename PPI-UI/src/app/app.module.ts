import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './api-data/app-data';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgApexchartsModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    AppRoutingModule,
  ],
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
