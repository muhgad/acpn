import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { environment as env } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exhibition3d',
  templateUrl: './exhibition3d.component.html',
  styleUrls: ['./exhibition3d.component.scss'],
})
export class Exhibition3dComponent implements OnInit {
  constructor(
    private _location: Location,
    private titleService: Title,
    private cookieService: CookieService,
    private router: Router
  ) {
    if (!this.cookieService.check('token')) {
      this.router.navigateByUrl('login');
    }

    this.titleService.setTitle(
      'Please wait for the 3D environment to load or <a style="color:#fff;text-decoration: underline;" href="./exhibition">use 2D exhibition instead </a>'
    );
  }
  isLoaded = false;
  // hall = 'assets/event/exh/3d/events52.gltf';
  hall = 'assets/event/exh/3d/hall.gltf';

  // diamond_booth = 'assets/event/exh/3d/diamond_booth.gltf';
  // gold_booth = 'assets/event/exh/3d/gold_booth.gltf';
  // platinum_booth = 'assets/event/exh/3d/platinum_booth.gltf';
  // silver_booth = 'assets/event/exh/3d/silver_booth.gltf';
  zimmer_booth = 'assets/event/exh/3d/zimmer_booth.gltf';
  amgen_booth = 'assets/event/exh/3d/amgen_booth.gltf';
  lilly_booth = 'assets/event/exh/3d/lilly_booth.gltf';
  smith_booth = 'assets/event/exh/3d/smith_booth.gltf';
  medpharma_booth = 'assets/event/exh/3d/medpharma_booth.gltf';
  pfizer_booth = 'assets/event/exh/3d/pfizer_booth.gltf';
  depuy_booth = 'assets/event/exh/3d/depuy_booth.gltf';
  amico_booth = 'assets/event/exh/3d/amico_booth.gltf';
  stryker_booth = 'assets/event/exh/3d/stryker_booth.gltf';

  loaded($event: any) {
    this.isLoaded = true;
    this.titleService.setTitle(env.con_name);
  }

  ngOnInit(): void {}

  log() {
    console.log('Log ny click');
  }
  backClicked() {
    this._location.back();
  }
}
