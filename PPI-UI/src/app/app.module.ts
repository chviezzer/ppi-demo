import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartModule } from 'ngx-chart';

// Imports for loading & configuring the in-memory web api

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './api-data/app-data';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    AppRoutingModule,
    NgxChartModule,
  ],
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
