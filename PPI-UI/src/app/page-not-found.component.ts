import { Component } from '@angular/core';

@Component({
  template: `
    <p>
      This page doesn't exist. Go back to
      <a [routerLink]="['/home']">Home</a>
    </p>
  `,
})
export class PageNotFoundComponent {}
