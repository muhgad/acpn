import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
@Component({
  selector: 'app-speaker3',
  templateUrl: './speaker3.component.html',
  styleUrls: ['./speaker3.component.css'],
})
export class Speaker3Component implements OnInit {
  speakers: any;
  imageLink: string;
  constructor(private apiServerice: ApiService) {
    this.imageLink = env.imageLink;
  }

  ngOnInit(): void {
    this.doGet();
  }
  doGet() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice
      .doGet(`conferences/${env.selectedEvent}/roles/8/members`)
      .subscribe((res) => {
        // console.log('Besm allah Alrahman');
        // console.log('res', res);
        this.speakers = res;
      });
  }
}
