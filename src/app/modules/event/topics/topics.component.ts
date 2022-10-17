import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent implements OnInit {
  topics: any;
  constructor(private apiServerice: ApiService) {}

  ngOnInit(): void {
    this.doGet();
  }
  doGet() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice.doGet(`topics/${env.selectedEvent}`).subscribe((res) => {
      // console.log('Besm allah Alrahman');
      // console.log('res', res);
      this.topics = res;
    });
  }
}
