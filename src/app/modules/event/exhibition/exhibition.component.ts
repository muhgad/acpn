import { Component, OnInit, Inject } from '@angular/core';

import { Router } from '@angular/router';

import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';

import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css'],
})
export class ExhibitionComponent implements OnInit {
  classified = false;
  response: any;
  cats: any;
  cats_length = 0;
  showSpinner: boolean = true;

  imageLink = env.imageLink;
  constructor(
    private _location: Location,
    private router: Router,
    private apiServerice: ApiService,
    public dialog: MatDialog
  ) {

    this.getExhibition();
  }

  ngOnInit(): void {}

  getExhibition() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice
      .doGet(`exhibition/${env.selectedEvent}`)
      .subscribe((res) => {
        // console.log('Besm allah Alrahman');
        // console.log('res', res);
        this.response = res;
        this.classified = this.response.classified;
        // console.log('res', this.classified);
        this.cats = this.response.result;
        this.cats_length = this.cats.length;
        this.showSpinner = false;
      });
  }

  backClicked() {
    this._location.back();
  }
  openDialog(d_name: string, d_type = 'image') {
    const dialogRef = this.dialog.open(DialogExhibition, {
      data: { name: d_name, type: d_type },
    });

    dialogRef.afterClosed().subscribe((result) => {
    
    });
  }
}
@Component({
  selector: 'dialog-exhibition',
   templateUrl: 'dialog-exhibition.html',
})
export class DialogExhibition {
  name = 'in Dialog';
  type = 'image';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string; type: string }
  ) {
    this.name = data.name;
    this.type = data.type;
  }
}
