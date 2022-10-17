import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/core/http/api.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Location } from '@angular/common';
import { environment as env } from '@env/environment';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  slug: String = '';
  con_id: string;
  // conference: Observable<any>;
  conference: any;

  constructor(
    private apiServerice: ApiService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    // this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    // this.con_id = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.con_id = '1';

    this.doGet();

    // console.log(this.slug, 'id');
  }

  ngOnInit(): void {
    if (env.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }
  }

  doGet() {
    this.apiServerice.doGet(`conferences/${this.con_id}`).subscribe((res) => {
      this.conference = res;
      //  this.titleService.setTitle(this.conference.name);
    });
  }
}
