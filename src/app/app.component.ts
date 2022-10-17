import { Component, HostListener, ElementRef } from '@angular/core';
import { ApiService } from './core/http/api.service';
import { environment as env } from '@env/environment';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private apiServerice: ApiService, private titleService: Title) {
    this.titleService.setTitle(env.con_name);
    // console.log(window.paypal);
    // window.VRDisplayCapabilities.Buttons({
    //   style:{
    //     layout:'horizontal'
    //   }
    // }).render(this.paypalRef.);
  }
  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
