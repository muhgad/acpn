import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-exh-zimmer',
  templateUrl: './exh-zimmer.component.html',
  styleUrls: ['./exh-zimmer.component.scss'],
})
export class ExhZimmerComponent {
  constructor(private _location: Location, public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  linkVedio = 'CilfD3gdKxE';
  linkVedio2 = '512612732';
  print_msg(str: string) {
    alert(str);
  }
  backClicked() {
    this._location.back();
  }

  openDialog(d_name: string, d_type = 'image', d_list = 'no') {
    const dialogRef = this.dialog.open(DialogZimmer, {
      data: { name: d_name, type: d_type, list: d_list },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-zimmer',
  templateUrl: 'dialog-zimmer.html',
})
export class DialogZimmer {
  name = 'in Dialog';
  type = 'image';
  list = 'no';
  // link = 'https://www.youtube.com/embed/7pg62TjqugQ';

  // linkVedio1 = 'https://vimeo.com/512171576';
  linkVedio1 = '512171576';
  linkVedio2 = '512171962';
  linkVedio3 = '512173303';
  linkVedio4 = '512173482';
  linkVedio5 = '512173525';
  linkVedio6 = '512173587';
  link1 = 'zimmer_1-FastFrame-Damage-Control-SurgTech.pdf';
  link2 = 'zimmer_2-dvr-portfolio-of-plates-surgical-technique.pdf';
  link3 = 'zimmer_3-alps-proximal-humerus-plating-system-brochure.pdf';
  link4 =
    'zimmer_4-1927.2-GLBL-en AFFIXUS Natural Nail Proximal Humerus Surgical Technique-digital-VFINAL.pdf';
  link5 = 'zimmer_5Augmented-Baseplate-TECHNICAL-GUIDE.pdf';
  link6 = 'zimmer_6Signature-ONE-Shoulder-System-Flyer-digital.pdf';
  link7 = 'zimmer_7Flyer-Augments-n-Signature-Bone-Preservation-Baseplate.pdf';
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { name: string; type: string; list: string },
    public dialog: MatDialog
  ) {
    this.name = data.name;
    this.type = data.type;
    this.list = data.list;
    // this.link = 'https://www.youtube.com/embed/' + this.name;
  }
  openDialogVimeo(d_name: string, d_type = 'image', d_list = 'no') {
    const dialogRef = this.dialog.open(DialogZimmerVimeo, {
      data: { name: d_name, type: d_type, list: d_list },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
////////////
@Component({
  selector: 'dialog-zimmer_vimeo',
  templateUrl: 'dialog-zimmer-vimeo.html',
})
export class DialogZimmerVimeo {
  name = 'in Dialog';
  type = 'image';
  list = 'no';
  // link = 'https://www.youtube.com/embed/7pg62TjqugQ';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { name: string; type: string; list: string }
  ) {
    this.name = data.name;
    this.type = data.type;
    this.list = data.list;
    // this.link = 'https://www.youtube.com/embed/' + this.name;
  }
}
