import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CreditHoursService {
  // userToken: string="";

  constructor(
    private cookieService: CookieService,
    private apiServerice: ApiService
  ) {}

  check_in(activity: string) {
    var token = this.cookieService.get('token');

    var checkin_flag = this.cookieService.get('checkin_flag');
    if (checkin_flag == 'Yes') {
      this.check_out();
    }
    // check acticity
    var link = ``;
    // if (activity != null) {
    if (activity != '') {
      link = `/${activity}`;
    }

    this.apiServerice
      .doGet(`attendance/${env.selectedEvent}/checkin/${token}${link}`)
      .subscribe((res) => {
        console.log('res check in', res);
        this.cookieService.set('checkin_flag', 'Yes', 1);
        // this.speakers = res;
      });
  }

  check_out(status: string = 'No') {
    var result: any;
    var token = this.cookieService.get('token');

    this.apiServerice
      .doGet(`attendance/${env.selectedEvent}/checkout/${status}/${token}`)
      .subscribe((res) => {
        result = res;
        if (result.status == 'success') {
          this.cookieService.set('checkin_flag', 'No', 1);
        }
        console.log('check out res', res);
        // this.speakers = res;
      });
  }
}
