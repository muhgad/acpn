import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HeaderComponent } from 'app/layout/header/header.component';
import { AuthenticationService } from 'app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  result: any;
  conference_id: string = env.selectedEvent;
  con_name: string = env.con_name;
  con_date: string = env.con_date;
  // @Output() authEvent = new EventEmitter<string>();

  // submited:boolean = false;
  constructor(
    private apiServerice: ApiService,
    private cookieService: CookieService,
    private router: Router,
    private auth: AuthenticationService
  ) {}

  name: string = '';

  ngOnInit(): void {
    this.auth.currentMessage.subscribe((name) => (this.name = name));
  }
  authLoginYes(str: string) {
    this.auth.changeMessage(str);
  }

  onSummit(form: any) {
    if (form.valid) {
      // console.log('fff', form.value);
      // console.log('link', `conferences/${env.selectedEvent}/register`);
      this.apiServerice.doPost(`login`, form.value).subscribe((res) => {
        // console.log('Besm allah Alrahman');
        console.log('doPost', res);

        this.result = res;
        if (this.result.status == 'success') {
          this.cookieService.delete('name');
          this.cookieService.delete('token');
          this.cookieService.delete('checkin_flag');

          this.cookieService.set('token', this.result.user.jwt_token, 1);
          this.cookieService.set('name', this.result.user.name, 1);
          // this.authEvent.emit('login');

          this.authLoginYes(this.result.user.name);
          this.router.navigateByUrl('');
          // this.router.navigateByUrl('exhibition3d');
          // this.router.navigateByUrl('recorded-sessions');
        }
        // this.status = res.status;
        // this.message = res.message;
      });
      // formValue.reset();
    } else {
      // alert('Form not valid');
    }
  }
}
