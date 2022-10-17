import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exh-amgen',
  templateUrl: './exh-amgen.component.html',
  styleUrls: ['./exh-amgen.component.scss'],
})
export class ExhAmgenComponent {
  constructor(private _location: Location, public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  link1 = 'amgen_1.Evenity-ITC-lightbox-158x80.png';
  link2 = 'amgen_2.Evenity-ITC-lightbox-100x200-V2.png';
  link3 = 'amgen_3.Evenity-ITC-lightbox-100x200.png';
  link4 = 'amgen_4.Evenity-ITC-lightbox-158x80.png';
  link5 = 'amgen_5.Evenity-ITC-lightbox-158x80.png';
  linkVedio = '';

  print_msg(str: string) {
    alert(str);
  }
  backClicked() {
    this._location.back();
  }

  openDialog(d_name: string, d_type = 'image') {
    const dialogRef = this.dialog.open(DialogAmgen, {
      data: { name: d_name, type: d_type },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-amgen',
  templateUrl: 'dialog-amgen.html',
})
export class DialogAmgen {
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
