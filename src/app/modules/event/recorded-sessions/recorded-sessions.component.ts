import { Component, OnInit } from '@angular/core';
import { environment as env } from '@env/environment';
import { ApiService } from 'app/core/http/api.service';
import { formatDate } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recorded-sessions',
  templateUrl: './recorded-sessions.component.html',
  styleUrls: ['./recorded-sessions.component.css'],
})
export class RecordedSessionsComponent implements OnInit {
  agenda: any;
  userToken: string;
  constructor(
    private apiServerice: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) {
    if (!this.cookieService.check('token')) {
      this.router.navigateByUrl('login');
    }
    this.userToken = this.cookieService.get('token');
  }
  // pdfUrl =
  //   'https://blueocean-me.com/cm_ups/agendas/2020/09/22/19033645665f6a6b1cab5f29_29926049.pdf';
  ngOnInit(): void {
    this.doGet();
  }
  doGet() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice.doGet(`agenda/${env.selectedEvent}`).subscribe((res) => {
      // console.log('Ya allah');
      // console.log('res', res);
      this.agenda = res;
    });
  }
}
