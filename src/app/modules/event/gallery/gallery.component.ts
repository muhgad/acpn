import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  gallary = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  constructor(public dialog: MatDialog, private gallery: Gallery) {}

  ngOnInit(): void {}

  showGallery(index: number) {
    let prop = {
      images: [{ path: 'path_to_image_full_image' }],
      index,
    };
    this.gallery.load(prop);
  }
  openDialog(d_name: string, d_type = 'image') {
    const dialogRef = this.dialog.open(DialogGallery, {
      data: { name: d_name, type: d_type },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-gallery',
  templateUrl: 'dialog-gallery.html',
})
export class DialogGallery {
  name;
  type = 'image';
  link = 'https://www.youtube.com/embed/7pg62TjqugQ';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: number; type: string }
  ) {
    this.name = data.name;
    this.type = data.type;
    this.link = 'https://www.youtube.com/embed/' + this.name;
  }
}
