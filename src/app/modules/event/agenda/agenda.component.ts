import { Component, OnInit } from '@angular/core';
import { environment as env } from '@env/environment';
import { ApiService } from 'app/core/http/api.service';
import { formatDate } from '@angular/common';

export interface RowAgenda{
  conference_id:string;
  created_at:Date;
  desc:string;

  hall:string;
  location:string;
  start_time_str:string;
  start_time_iso:Date;
  start_time:Date;

  end_time_str:string;
  end_time_iso:Date;
  end_time:Date;
  status?:number;
  title:string;
  type:string;
  updated_at:string;

  id:number;
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  agenda: any;
  agendaRows: RowAgenda[]=[];

  constructor(private apiServerice: ApiService) {}
  pdfUrl = '';
  conference: any;
  imageLink = env.imageLink;
  dataExist = false;

  searchText = '';
  searchResult: any;
  searchResultExist = 'no';
  searchload = 'no';

  active_day=0;
  active_hall='A';
   hallsTitles = new Map();


  ngOnInit(): void {
    this.doGetAgenda();
    this.getConference();
  }
  open_day(index:number,halls:any){
    console.log('open_day_index=',index,'hall=',halls);
this.active_day=index;
this.active_hall='';
if(halls.length == 1){
  this.active_hall=halls[0];
}
  }
  open_hall(index:number,hall:string){
    console.log('open_hall_index=',index,'hall=',hall);
    this.active_day=index;
    this.active_hall=hall;
  }
  doGetAgenda() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice.doGet(`agenda/${env.selectedEvent}`).subscribe((res) => {
      // console.log('Ya allah');
      // console.log('agenda=', res);
      this.agenda = res;

      this.dataExist = true;
      // if (this.agenda.length > 0) {
      //   this.dataExist = true;
      // } else {
      //   this.dataExist = false;
      // }
    });
  }
  getConference() {
    this.apiServerice
      .doGet(`conferences/${env.selectedEvent}`)
      .subscribe((res) => {
        console.log('res', res);
        this.conference = res;
        this.pdfUrl = this.conference.agenda_file;
        this.hallsTitles.set('A',this.conference.live1_title);
        this.hallsTitles.set('B',this.conference.live2_title);
        this.hallsTitles.set('C',this.conference.live3_title);
        this.hallsTitles.set('D',this.conference.live4_title);
        this.hallsTitles.set('E',this.conference.live5_title);

      });
  }
  LocalSearch() {
    // console.log('in local serach');
    if(this.dataExist && this.searchText.length >0){
    this.agendaRows = [];
    this.searchResultExist = 'no';
        //Start
        for (let i = 0; i < this.agenda.length; i++) {
          for (let j = 0; j < this.agenda[i].activities.length; j++) {

          if( this.agenda[i].activities[j].title.toLowerCase().includes(this.searchText.toLowerCase()) || ( this.agenda[i].activities[j].location != null && this.agenda[i].activities[j].location.toLowerCase().includes(this.searchText.toLowerCase()))  ){
            // console.log('Alhamed llah');
            this.searchResultExist = 'yes';
            this.agendaRows.push( this.agenda[i].activities[j] );
          }
        }
        }
        //End
        // console.log('this.agendaRows=',this.agendaRows)
        // console.log('this.searchResultExist=',this.searchResultExist);
      }else{
        this.searchResultExist = 'no';
      }
  }
}

