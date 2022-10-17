import {
  AfterViewInit,
  ElementRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';

// declare function hello(): any; // just change here from arun answer.

declare var $: any;
// console.log(`jQuery version: ${$.fn.jquery}`);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @ViewChild('tasks') tasks: ElementRef;
  // ngAfterViewInit() {
  //   alert(133);
  //   this.tasks.nativeElement.click();
  // }
  menutoggle() {
    $('.navbar-collapse').collapse('hide');
  }

  userLogin: boolean = false;
  name: string = '';
  dataFromChild: string = '';
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private auth: AuthenticationService,
    private apiServerice: ApiService
  ) {}

  // receiveMesage($vent) {
  //   console.log('', $vent);
  // }

  ngOnInit(): void {
    this.auth.currentMessage.subscribe((name) => (this.name = name));

    if (this.cookieService.check('name')) {
      this.name = this.cookieService.get('name');
      this.userLogin = true;
    } else {
      this.userLogin = false;
    }
    // hello.prototype.hello();
  }

  logout() {
    console.log('the first comman');
    this.auth.logout();

    this.userLogin = false;

    this.router.navigateByUrl('login');
    this.authLogoutYes();
  }

  authLogoutYes() {
    this.auth.changeMessage('');
  }
}
