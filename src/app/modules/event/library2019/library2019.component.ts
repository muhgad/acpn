import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-library2019',
  templateUrl: './library2019.component.html',
  styleUrls: ['./library2019.component.scss'],
})
export class Library2019Component implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog(d_name: string, d_type = 'image') {
    const dialogRef = this.dialog.open(DialogLibrary19, {
      data: { name: d_name, type: d_type },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-library',
  templateUrl: 'dialog-library.html',
})
export class DialogLibrary19 {
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
