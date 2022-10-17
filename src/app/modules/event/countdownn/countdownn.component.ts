import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
// import { formatDate, DatePipe } from '@angular/common';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
import { TimerComponent } from '../timer/timer.component';
import { CookieService } from 'ngx-cookie-service';

// declare var jQuery: any;

// import 'src/assets/js/jquery.jCounter.js';
// import { custom } from 'assets/js/custom.js';
@Component({
  selector: 'app-countdownn',
  templateUrl: './countdownn.component.html',
  styleUrls: ['./countdownn.component.css'],
})
export class CountdownnComponent implements OnInit {
  //AfterViewInit
  // @Input()
  conference: any;
  con_name: string = env.con_name;
  con_date: string = env.con_date;
  user_login = false;
  // conference: any;

  // @ViewChild(TimerComponent) timer;

  // livenow: false; //= false;
  livestream: boolean = false; // for test and solve problem live now

  status = 'Open';
  receiveLive($event: any) {
    this.livestream = $event;
  }
  // ngAfterViewInit() {
  //   // setInterval(() => {
  //   //   this.livenow = this.timer.livenow;
  //   // }, 1000);
  //   this.livenow = this.timer.livenow;
  // }
  constructor(
    private apiServerice: ApiService,
    private cookieService: CookieService
  ) {
    if (this.cookieService.check('token')) {
      this.user_login = true;
    }
    console.log('user_login', this.user_login);
  }

  ngOnInit(): void {
    this.getConference();

    if (env.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }
    // this.livenow = true;
  }
  getConference() {
    this.apiServerice
      .doGet(`conferences/${env.selectedEvent}`)
      .subscribe((res) => {
        // console.log('res', res);
        this.conference = res;
        this.status = this.conference.status;
      });
  }
}
