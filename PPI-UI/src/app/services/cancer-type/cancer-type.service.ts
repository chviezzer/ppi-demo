import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError, Observable, catchError, tap } from 'rxjs';
import { BaseService } from '../base.service';

import { CancerType } from '../../shared/interfaces/cancer-type.interface';

@Injectable({
  providedIn: 'root',
})
export class CancerTypeService extends BaseService {
  private cancerUrl = '/cancer';
  constructor(private http: HttpClient) {
    super();
  }

  cancerTypes$ = this.http
    .get<CancerType[]>(this.baseUrl + this.cancerUrl)
    .pipe(
      // tap((data) => console.log('Cells: ', JSON.stringify(data))),  #for debug.
      catchError(this.handleError)
    );
}
