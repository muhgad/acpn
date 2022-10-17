import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as env } from '@env/environment';
import { HandleErrorService } from './handle-error.service';
import { catchError } from 'rxjs/operators';
// import { Conference } from 'app/data/schema/conference';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers: HttpHeaders;
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {
    const headers = {
      'Api-key': '50b59cd75bed76f46522c350587e331f6d9339e5c1a7493c',
      // lang: 'eg',
    };
    this.headers = new HttpHeaders(headers);
  }

  doGet(link: String) {
    // console.log(`${env.apiRoot}/${link}`);
    return this.http.get(`${env.apiRoot}/${link}`, {
      headers: this.headers,
    });
  }

  doPost(link: String, params: HttpParams) {
    return this.http
      .post(
        `${env.apiRoot}/${link}`,
        { age: '20' },
        {
          params: params,
          headers: this.headers,
        }
      )
      .pipe(catchError(this.handleError.logError));
  }
  doPost11(link: String, params: HttpParams) {
    return this.http
      .post(
        `${env.apiRoot}/post`,
        { age: '20' },
        {
          params: { title: 'Dr.' },
          headers: this.headers,
        }
      )
      .pipe(catchError(this.handleError.logError));
  }
  doDelete() {
    return this.http.delete(`${env.apiRoot}/delete`, {
      params: { page: '20' },
      headers: this.headers,
    });
  }
  doPut() {
    return this.http.put(
      `${env.apiRoot}/put`,
      { age: '20' },
      {
        params: { page: '20' },
        headers: this.headers,
      }
    );
  }
}
