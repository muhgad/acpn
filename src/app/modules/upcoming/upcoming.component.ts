import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { Conference } from 'app/data/schema/conference';
import { from } from 'rxjs';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  constructor(private apiServerice: ApiService) {
    this.doGet();
  }

  ngOnInit(): void {}
  // conferences: Conference[];
  conferences: any;

  doGet() {
    // console.log('Besm allah');
    this.apiServerice.doGet('conferences').subscribe((res) => {
      this.conferences = res;
      //   this.result = JSON.parse(res);
      //   this.result.forEach(function (value) {
      //     console.log(value.name);
      // });
    });
  }
}
