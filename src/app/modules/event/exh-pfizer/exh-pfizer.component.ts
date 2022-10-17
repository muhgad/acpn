import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-exh-pfizer',
  templateUrl: './exh-pfizer.component.html',
  styleUrls: ['./exh-pfizer.component.scss'],
})
export class ExhPfizerComponent {
  constructor(private _location: Location, public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  link1 = 'lilly_banner1.jpg';
  link2 = 'lilly_banner2.jpg';
  link3 = 'lilly_banner3.jpg';
  link4 = 'lilly_banner4.jpg';
  link5 = 'lilly_banner5.jpg';
  linkVedio = '';

  print_msg(str: string) {
    alert(str);
  }
  backClicked() {
    this._location.back();
  }

  openDialog(d_name: string, d_type = 'image') {
    const dialogRef = this.dialog.open(DialogPfizer, {
      data: { name: d_name, type: d_type },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-pfizer',
  templateUrl: 'dialog-pfizer.html',
})
export class DialogPfizer {
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
