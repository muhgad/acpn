import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-exh-depuy',
  templateUrl: './exh-depuy.component.html',
  styleUrls: ['./exh-depuy.component.scss'],
})
export class ExhDepuyComponent {
  constructor(private _location: Location, public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  link1 = 'depuy_APPROVED_126485-191028-DSEM-CCHS-Trifold-Brochure.pdf';
  link2 = 'depuy_APPROVED_DSEM-TRM-0614-0098Surgical-Technique.pdf';
  link3 = 'depuy_EMEA_095801-180726_FRN-Value-Brief.pdf';

  // linkVedio = 'https://vimeo.com/511909826/922b741dcf';
  linkVedio = 'https://player.vimeo.com/video/511909826';

  print_msg(str: string) {
    alert(str);
  }
  backClicked() {
    this._location.back();
  }

  openDialog(d_name: string, d_type = 'image') {
    const dialogRef = this.dialog.open(DialogDepuy, {
      data: { name: d_name, type: d_type },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-depuy',
  templateUrl: 'dialog-depuy.html',
})
export class DialogDepuy {
  name = 'in Dialog';
  type = 'image';
  // link = '';
  linkVedio = 'https://player.vimeo.com/video/511909826';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string; type: string }
  ) {
    this.name = data.name;
    this.type = data.type;
    // this.link = 'https://www.youtube.com/embed/' + this.name;
  }
}
