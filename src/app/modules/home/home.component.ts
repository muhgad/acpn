import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment as env } from '@env/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  con_name: string = env.con_name;
  con_date: string = env.con_date;
  constructor(private _location: Location, public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog(d_name: string, d_type = 'image') {
    const dialogRef = this.dialog.open(DialogHome, {
      data: { name: d_name, type: d_type },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-home',
  templateUrl: 'dialog-home.html',
})
export class DialogHome {
  name = 'in Dialog';
  type = 'image';
  link = 'https://www.youtube.com/embed/7pg62TjqugQ';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string; type: string }
  ) {
    this.name = data.name;
    this.type = data.type;
    this.link = 'https://www.youtube.com/embed/' + this.name;
  }
}
