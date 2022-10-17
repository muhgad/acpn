import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css'],
})
export class ForgetPassComponent implements OnInit {
  result: any;
  conference_id: string = env.selectedEvent;
  con_name: string = env.con_name;
  con_date: string = env.con_date;
  constructor(private apiServerice: ApiService) {}

  ngOnInit(): void {}

  onSummit(form: any) {
    if (form.valid) {
      // console.log('link', `conferences/${env.selectedEvent}/register`);
      this.apiServerice.doPost(`forget_pass`, form.value).subscribe((res) => {
        // console.log('Besm allah Alrahman');
        // console.log('doPost', res);

        this.result = res;
        if (this.result.status == 'success') {
        }
        // this.status = res.status;
        // this.message = res.message;
      });
      // formValue.reset();
    } else {
      alert('Form not valid');
    }
  }
}
