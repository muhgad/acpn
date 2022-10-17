import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';

import { Router } from '@angular/router';
import { CreditHoursService } from '../../../shared/services/credit-hours.service';

// interface ChatMember {
//   name: string;
//   text: string;
// }

@Component({
  selector: 'app-live-test',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css'],
})
export class LiveComponent implements OnInit {
  textaraVal: string = '';
  name: string = '';
  userToken: string;
  result: any;
  speakers: any;

  live_type: string = 'youtube';
  youtube1: string = '';
  vimeo1: string = '';

  conference: any;
  conference_id: string = env.selectedEvent;
  @HostListener('window:unload', ['$event'])
  unloadHandler($event: any) {
    console.log('besm allah  11111111111111111');
    // this.check_out();
    console.log($event);
    // $event.returnValue = false;
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler($event: any) {
    // for refresh
    console.log('besm allah  2222222222222222222');
    // this.check_out();
    // $event.returnValue = false;
  }
  constructor(
    private cookieService: CookieService,
    private apiServerice: ApiService,
    private router: Router,
    private cme: CreditHoursService
  ) {
    if (!this.cookieService.check('token')) {
      this.router.navigateByUrl('login');
    }
    this.userToken = this.cookieService.get('token');
  }
  ngOnInit(): void {
    this.doConference();
    this.doSpeakers();

    this.check_in();
    setInterval(() => {
      console.log('start loooooog oooooout');
      this.check_out();
    }, 1000 * 60 * 30);
  }

  doConference() {
    this.apiServerice
      .doGet(`conferences/${env.selectedEvent}`)
      .subscribe((res) => {
        // console.log('res', res);
        this.conference = res;
        // console.log('get con', this.conference.live_link);
        this.live_type = this.conference.live_type;
        this.youtube1 = this.conference.live_link;
        this.vimeo1 = this.conference.vimeo1;
      });
  }
  add_ques(form: any) {
    // const ca: ChatMember = { name: this.name, text: this.textaraVal };
    // this.todos.push(ca);

    form.value.token = this.userToken;

    this.apiServerice
      .doPost(`questions/${env.selectedEvent}`, form.value)
      .subscribe((res) => {
        // console.log('Besm allah Alrahman');
        // console.log('doPost', res);

        this.result = res;
        if (this.result.status == 'success') {
        }
        // this.status = res.status;
        // this.message = res.message;
      });

    this.textaraVal = '';
  }

  doSpeakers_old() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice
      .doGet(`conferences/${env.selectedEvent}/roles/2/members`)
      .subscribe((res) => {
        // console.log('Besm allah Alrahman');
        // console.log('res', res);
        this.speakers = res;
      });
  }

  doSpeakers() {
    this.apiServerice
      .doGet(`conferences/${env.selectedEvent}/today_agenda_speakers`)
      .subscribe((res) => {
        // console.log('today_agenda_speakers', res);
        this.speakers = res;
      });
  }
  check_in() {
    this.cme.check_in('');
  }
  check_out() {
    this.cme.check_out('No');
  }
}
