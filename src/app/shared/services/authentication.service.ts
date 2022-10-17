import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';
// import {  HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { CreditHoursService } from '../../shared/services/credit-hours.service';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // private messageSource = new BehaviorSubject<string>(null);
  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();

  constructor(
    private cookieService: CookieService,
    private apiServerice: ApiService,
    private cme: CreditHoursService,
    private router: Router
  ) {}
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  checkJWT() {
    var token = this.cookieService.get('token');
    var params: any = { conference_id: env.selectedEvent, token: token };
    var result: any;

    this.apiServerice.doPost(`jwt`, params).subscribe((res) => {
      console.log('Besm allah Alrahman');
      console.log('doPost jwt', res);

      result = res;
      if (result.status == 'error') {
        this.cookieService.delete('name');
        this.cookieService.delete('token');
        this.cookieService.delete('checkin_flag');
        this.router.navigateByUrl('login');
        this.changeMessage('');
        return false;
      }
      return true;
      // this.status = res.status;
      // this.message = res.message;
    });
  }
  logout() {
    if (this.cookieService.check('checkin_flag')) {
      var checkin_flag = this.cookieService.get('checkin_flag');
      if (checkin_flag == 'Yes') {
        console.log('your member is check in');
        this.cme.check_out('Yes');
      }
    }

    //
    var result: any;

    var token = this.cookieService.get('token');
    // var params: HttpParams ;
    // console.log('token in logout', token);
    // params.set('token', token);
    // params.set('conference_id', env.selectedEvent);
    var params: any = { conference_id: env.selectedEvent, token: token };

    this.apiServerice.doPost(`logout`, params).subscribe((res) => {
      console.log('Besm allah Alrahman');
      console.log('doPost', res);

      result = res;
      if (result.status == 'success') {
        this.cookieService.delete('name');
        this.cookieService.delete('token');
        this.cookieService.delete('checkin_flag');
        // this.authEvent.emit('login');

        //this.authLoginYes(result.user.name);
        // this.router.navigateByUrl('live');
        //this.router.navigateByUrl('recorded-sessions');
      }

      // this.status = res.status;
      // this.message = res.message;
    });
  }
}
