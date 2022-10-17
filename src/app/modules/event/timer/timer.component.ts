import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  startTimer = false;
  conference: any;
  days: any;
  hours: any;
  mins: any;
  secs: any;

  livenow = false;

  eventStart: any; //= '2020-09-24T18:00:00';
  timeNow: any; //= '2020-09-23 16:00:00';

  remainderSeconds = 0;

  @Output() liveEvent = new EventEmitter<boolean>();

  sendLive() {
    this.liveEvent.emit(this.livenow);
  }

  constructor(private apiServerice: ApiService) {}

  ngOnInit(): void {
    this.doConference();
    setInterval(() => {
      // console.log('call timer in ngOnInit');
      if (this.startTimer) {
        this.calc_timer();
      }
    }, 1000);
  }

  doConference() {
    this.apiServerice
      .doGet(`conferences/${env.selectedEvent}`)
      .subscribe((res) => {
        // console.log('res', res);
        this.conference = res;
        // this.eventStart = this.conference.start_date;
        this.eventStart = this.conference.timer;
        this.timeNow = this.conference.time_now;
        // this.remainderSeconds =
        //   this.getTimesInSeconds(this.eventStart) -
        //   this.getTimesInSeconds(this.timeNow);

        // console.log('eventStart', new Date(this.eventStart));
        // console.log('timeNow', new Date(this.timeNow));
        this.remainderSeconds =
          (new Date(this.eventStart).valueOf() -
            new Date(this.timeNow).valueOf()) /
          1000;
        // console.log('eventStart', this.eventStart);
        // console.log('timeNow', this.timeNow);
        // console.log('remainderSeconds', this.remainderSeconds);

        this.startTimer = true;
      });
  }

  calc_timer() {
    if (this.remainderSeconds - 60 * 5 <= 0) {
      console.log('ASD', this.remainderSeconds);
      this.livenow = true;
      this.sendLive();
      console.log('livenow', this.livenow);
      this.days = '00';
      this.hours = '00';
      this.mins = '00';
      this.secs = '00';
      return;
    }
    // else {
    //start
    // console.log('remainderSeconds', this.remainderSeconds);
    // this.livenow = false;
    // this.sendLive();
    ////end
    // }

    this.remainderSeconds -= 1;
    let seconds = this.remainderSeconds;

    this.days = Math.floor(seconds / (60 * 60 * 24));

    seconds -= this.days * 60 * 60 * 24;

    this.hours = Math.floor(seconds / (60 * 60));
    seconds -= this.hours * 60 * 60;

    this.mins = Math.floor(seconds / 60);
    seconds -= this.mins * 60;

    this.secs = Math.floor(seconds);

    this.days = this.days >= 10 ? this.days : '0' + this.days;
    this.hours = this.hours >= 10 ? this.hours : '0' + this.hours;
    this.mins = this.mins >= 10 ? this.mins : '0' + this.mins;
    this.secs = this.secs >= 10 ? this.secs : '0' + this.secs;

    // Math.floor();
    // console.log(
    //   'time',
    //   this.days,
    //   ' ',
    //   this.hours,
    //   ':',
    //   this.min,
    //   ':',
    //   this.sec
    // );
  }
  getTimesInSeconds(str: string) {
    // let str = '2020-07-23T19:56:32';

    let h = Number.parseInt(str.substr(11, 2));
    let m = Number.parseInt(str.substr(14, 2));
    let s = Number.parseInt(str.substr(17, 2));

    let date_str = str.substr(0, 10);

    let date = new Date(date_str);

    var result = date.valueOf() + h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
    // console.log('datedd', date);

    return result / 1000;
    // var result = (d * 60 * 60 * 24 * 356) + (m * 60 * 60 * 24*30)
    // console.log('y', y, 'm:', m, 'd', d, 'h', h, 'mi', mi, 's', s);
  }
}
