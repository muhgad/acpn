import { Component, OnInit, Input, Inject } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-speaker4',
  templateUrl: './speaker4.component.html',
  styleUrls: ['./speaker4.component.css'],
})
export class Speaker4Component implements OnInit {
  @Input() conference: any;
  @Input() con_id: String = '';

  speakers: any;
  count_speakers = 0;
  imageLink: string;
  constructor(private apiServerice: ApiService, public dialog: MatDialog) {
    this.imageLink = env.imageLink;
  }

  ngOnInit(): void {
    // console.log('ya rab');
    // console.log('con_id', this.con_id);
    // console.log(this.conference);
    // console.log(this.speakers);
    this.doGet();
  }

  doGet() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice
      .doGet(`conferences/${env.selectedEvent}/roles/2/members`)
      .subscribe((res) => {
        // console.log('Besm allah Alrahman');
        console.log('res', res);
        this.speakers = res;
        this.count_speakers = this.speakers.length;
      });
  }
  openDialog(
    d_name: string,
    d_image = 'image',
    d_des = 'image',
    d_bio = 'image'
  ) {
    const dialogRef = this.dialog.open(DialogSpeaker4, {
      data: {
        name: d_name,
        image: d_image,
        designation: d_des,
        biography: d_bio,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-speaker4',
  templateUrl: 'dialog-speaker4.html',
})
export class DialogSpeaker4 {
  name = 'in Dialog';
  image = 'image';
  designation = 'image';
  biography = 'image';
  imageLink: string;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      image: string;
      designation: string;
      biography: string;
    }
  ) {
    this.name = data.name;
    this.image = data.image;
    this.designation = data.designation;
    this.biography = data.biography;
    this.imageLink = env.imageLink;
  }
}
