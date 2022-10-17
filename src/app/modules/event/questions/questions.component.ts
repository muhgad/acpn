import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  questions: any;

  constructor(private apiServerice: ApiService) {}

  ngOnInit(): void {
    this.getQuestions();

    setInterval(() => {
      this.getQuestions();
    }, 10000);
  }
  getQuestions() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice
      .doGet(`questions/${env.selectedEvent}`)
      .subscribe((res) => {
        // console.log('Besm allah Alrahman');
        // console.log('res', res);
        this.questions = res;
      });
  }
}
