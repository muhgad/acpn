import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
import { Location } from '@angular/common';
// import { TimerComponent } from '../timer/timer.component';

// interface ChatMember {
//   name: string;
//   text: string;
// }\

@Component({
  selector: 'app-live',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.css'],
})
export class AuditoriumComponent implements OnInit {
  // , AfterViewInit
  // @ViewChild(TimerComponent) timer;
  livenow: boolean = false;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private location: Location,
    private apiServerice: ApiService
  ) {}

  ngOnInit(): void {
    if (!this.cookieService.check('token')) {
      // this.router.navigateByUrl('login');
      this.router.navigate(['/login']);
    }
  }
  // ngAfterViewInit() {
  //   this.livenow = this.timer.livenow;
  // }
  receiveLive($event: any) {
    if ($event) {
      this.router.navigate(['/live']);
    }
    this.livenow = $event;
  }
}
