import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exh-amico',
  templateUrl: './exh-amico.component.html',
  styleUrls: ['./exh-amico.component.scss'],
})
export class ExhAmicoComponent {
  constructor(private _location: Location, public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  link1 = 'amico_P1_Arthrex.png';
  link2 = 'amico_P2_Arthrex.png';
  link3 = 'amico_P3_Medtronic.png';
  link4 = 'amico_P4_Medtronic.png';
  link5 = 'amico_P5_NUVASIVE.png';
  link6 = 'amico_P7_NSK_.png';

  print_msg(str: string) {
    alert(str);
  }
  backClicked() {
    this._location.back();
  }

  openDialog(d_name: string, d_type = 'image') {
    const dialogRef = this.dialog.open(DialogAmico, {
      data: { name: d_name, type: d_type },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-amico',
  templateUrl: 'dialog-amico.html',
})
export class DialogAmico {
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
