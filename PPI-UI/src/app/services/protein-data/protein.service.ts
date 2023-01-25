import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProteinService {
  proteinUrl = 'api/proteins';

  constructor(private http: HttpClient) {}
}
