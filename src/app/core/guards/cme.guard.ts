import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { LiveComponent } from 'app/modules/event/live/live.component';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
import { CreditHoursService } from '../../shared/services/credit-hours.service';
@Injectable({ providedIn: 'root' })
export class CMEGuard implements CanDeactivate<LiveComponent> {
  constructor(
    private cookieService: CookieService,
    private apiServerice: ApiService,
    private cme: CreditHoursService
  ) {}
  canDeactivate(component: LiveComponent) {
    // console.log(component);
    this.check_out();
    if (window.confirm('Leaving this page will stop the CME counter!')) {
      return true;
    }
    return false;
  }

  check_out() {
    this.cme.check_out('Yes');
  }
}
