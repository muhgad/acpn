import { Component, OnInit } from '@angular/core';
import { environment as env } from '@env/environment';
import { ApiService } from 'app/core/http/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/services/authentication.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent implements OnInit {
  constructor(
    private apiServerice: ApiService,
    private cookieService: CookieService,
    private router: Router,
    private auth: AuthenticationService
  ) {
    if (!this.cookieService.check('token')) {
      this.router.navigateByUrl('login');
    }
    this.userToken = this.cookieService.get('token');
    ///
    this.auth.checkJWT();
  }
  certificate: any;
  userToken: string;

  certApprove: boolean = false;
  certificateUrl: string = '';
  // fileUrl;
  ngOnInit(): void {
    this.certificateUrl = `${env.certificate_link}/attendance/${env.selectedEvent}/certificate/${this.userToken}`;
    this.doGet();
  }

  doGet() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice
      .doGet(`attendance/${env.selectedEvent}/certificate/${this.userToken}`)
      .subscribe((res) => {
        // console.log('Ya allah');
        // console.log('res', res);
        this.certificate = res;
        if (this.certificate.certificate_approved == 'Yes') {
          this.certApprove = true;
        } else {
          this.certApprove = false;
        }
      });
  }
}
