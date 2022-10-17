import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css'],
})
export class ShowImageComponent implements OnInit {
  image: string = '';
  constructor(
    private _location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.image = this.activatedRoute.snapshot.paramMap.get('image') ?? '';
  }

  ngOnInit(): void {}
  backClicked() {
    this._location.back();
  }
}
