import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
import { Router } from '@angular/router';
import { CreditHoursService } from '../../../shared/services/credit-hours.service';

@Component({
  selector: 'app-agenda-video',
  templateUrl: './agenda-video.component.html',
  styleUrls: ['./agenda-video.component.css'],
})
export class AgendaVideoComponent implements OnInit {
  video: string = '';
  activity: string = '';
  userToken: string = '';

  constructor(
    private _location: Location,
    private activatedRoute: ActivatedRoute,
    private cookieService: CookieService,
    private apiServerice: ApiService,
    private router: Router,
    private cme: CreditHoursService
  ) {
    this.video =
      'https://www.youtube.com/embed/' +
      this.activatedRoute.snapshot.paramMap.get('video');
    this.activity = this.activatedRoute.snapshot.paramMap.get('activity') || '';

    ///////////////
    if (!this.cookieService.check('token')) {
      this.router.navigateByUrl('login');
    }
    this.userToken = this.cookieService.get('token');
  }

  ngOnInit(): void {
    this.check_in();
    setInterval(() => {
      // console.log('start loooooog oooooout');
      this.check_out();
    }, 1000 * 60 * 15);
  }
  check_in() {
    this.cme.check_in(this.activity);
  }
  check_out() {
    this.cme.check_out('No');
  }

  backClicked() {
    this._location.back();
  }
}
