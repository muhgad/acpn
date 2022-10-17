import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-vedio',
  templateUrl: './show-vedio.component.html',
  styleUrls: ['./show-vedio.component.css'],
})
export class ShowVedioComponent implements OnInit {
  link: string;
  constructor(
    private _location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.link =
      'https://www.youtube.com/embed/' +
      this.activatedRoute.snapshot.paramMap.get('link');
  }

  ngOnInit(): void {}
  backClicked() {
    this._location.back();
  }
}
