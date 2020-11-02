import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  get(path: string, params: HttpParams = new HttpParams()): void {
    this.http.get(`${environment.baseUrl}${path}`, { params }).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
    );
  }
}
