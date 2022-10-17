import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HttpInterceptorsProvider } from './core/interceptors';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { DialogHome, HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';

import { LoginComponent } from './modules/login/login.component';
import { UpcomingComponent } from './modules/upcoming/upcoming.component';
import { NewslatterComponent } from './modules/newslatter/newslatter.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { CountdownnComponent } from './modules/event/countdownn/countdownn.component';

import { SponsorsComponent } from './modules/event/sponsors/sponsors.component';
import { AgendaComponent } from './modules/event/agenda/agenda.component';
import { TopicsComponent } from './modules/event/topics/topics.component';
import { MapComponent } from './modules/event/map/map.component';
import { EventComponent } from './modules/event/event.component';
import { WelcomeComponent } from './modules/event/welcome/welcome.component';
import { Speaker3Component } from './modules/event/speaker3/speaker3.component';
import {
  DialogSpeaker4,
  Speaker4Component,
} from './modules/event/speaker4/speaker4.component';
import { NewsComponent } from './modules/event/news/news.component';
import { RegistrationComponent } from './modules/event/registration/registration.component';
import {   DialogExhibition, ExhibitionComponent } from './modules/event/exhibition/exhibition.component';
import { RegisterComponent } from './modules/event/register/register.component';
import { DialogCoupon } from './modules/event/register/register.component';

// import { DialogExhibition } from './modules/event/exhibition/dialog-exhibition.component';

import { RegisterSuccessComponent } from './modules/event/register-success/register-success.component';

import {
  DialogSociety,
  SocietyComponent,
} from './modules/event/society/society.component';

import { ToDateObjPipe } from './to-date-obj.pipe';
import { LiveComponent } from './modules/event/live/live.component';

import { ForgetPassComponent } from './modules/forget-pass/forget-pass.component';
import { QuestionsComponent } from './modules/event/questions/questions.component';
import { NoRightClickDirective } from './no-right-click.directive';
import { TimerComponent } from './modules/event/timer/timer.component';
import { SafeUrlPipe } from './safe-url.pipe';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DialogSociety2,
  Society2Component,
} from './modules/event/society2/society2.component';
import { ShowImageComponent } from './modules/event/show-image/show-image.component';

import { ShowVedioComponent } from './modules/event/show-vedio/show-vedio.component';

//// Gad
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AgendaVideoComponent } from './modules/event/agenda-video/agenda-video.component';
import { RecordedSessionsComponent } from './modules/event/recorded-sessions/recorded-sessions.component';
import { CertificateComponent } from './modules/event/certificate/certificate.component';
import { CheckoutComponent, CheckoutCoupon } from './modules/event/checkout/checkout.component';
// import { MatFormFieldModule, MatInputModule } from '@angular/material';
// import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CookieService } from 'ngx-cookie-service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Exhibition3dComponent } from './modules/event/exhibition3d/exhibition3d.component';

import {
  DialogLilly,
  ExhLillyComponent,
} from './modules/event/exh-lilly/exh-lilly.component';
import { AuditoriumComponent } from './modules/event/auditorium/auditorium.component';
import {
  DialogZimmer,
  DialogZimmerVimeo,
  ExhZimmerComponent,
} from './modules/event/exh-zimmer/exh-zimmer.component';
import {
  DialogAmgen,
  ExhAmgenComponent,
} from './modules/event/exh-amgen/exh-amgen.component';
import {
  DialogSmith,
  ExhSmithComponent,
} from './modules/event/exh-smith/exh-smith.component';
import {
  DialogMedpharma,
  ExhMedpharmaComponent,
} from './modules/event/exh-medpharma/exh-medpharma.component';
import {
  DialogPfizer,
  ExhPfizerComponent,
} from './modules/event/exh-pfizer/exh-pfizer.component';
import {
  DialogDepuy,
  ExhDepuyComponent,
} from './modules/event/exh-depuy/exh-depuy.component';
import {
  DialogStryker,
  DialogStrykerList,
  ExhStrykerComponent,
} from './modules/event/exh-stryker/exh-stryker.component';
import {
  DialogAmico,
  ExhAmicoComponent,
} from './modules/event/exh-amico/exh-amico.component';
import { MessageComponent } from './modules/event/message/message.component';
import {
  DialogLibrary20,
  Library2020Component,
} from './modules/event/library2020/library2020.component';
import {
  DialogLibrary19,
  Library2019Component,
} from './modules/event/library2019/library2019.component';
import {
  DialogLibrary18,
  Library2018Component,
} from './modules/event/library2018/library2018.component';

import {
  DialogLibrary16,
  Library2016Component,
} from './modules/event/library2016/library2016.component';
import {
  DialogLibrary,
  LibraryComponent,
} from './modules/event/library/library.component';
import {
  DialogGallery,
  GalleryComponent,
} from './modules/event/gallery/gallery.component';
import { IvyGalleryModule } from 'angular-gallery';
import { RegisterSoonComponent } from './modules/event/register-soon/register-soon.component';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    UpcomingComponent,
    NewslatterComponent,
    NotFoundComponent,
    CountdownnComponent,
    SponsorsComponent,
    AgendaComponent,
    TopicsComponent,
    MapComponent,
    EventComponent,
    WelcomeComponent,
    Speaker3Component,
    Speaker4Component,
    NewsComponent,
    RegistrationComponent,
    ExhibitionComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    AuditoriumComponent,
    SocietyComponent,
    ToDateObjPipe,
    LiveComponent,

    ForgetPassComponent,
    QuestionsComponent,
    NoRightClickDirective,
    TimerComponent,
    SafeUrlPipe,

    Society2Component,
    ShowImageComponent,

    ShowVedioComponent,

    AgendaVideoComponent,
    RecordedSessionsComponent,
    CertificateComponent,
    CheckoutComponent /*  */,
    DialogCoupon,
    Exhibition3dComponent,
    DialogHome,

    ExhLillyComponent,
    // DialogExhibition,
    DialogLilly,
    DialogAmico,
    DialogZimmer,
    DialogStryker,
    DialogSmith,
    DialogAmgen,
    DialogPfizer,
    DialogDepuy,
    DialogMedpharma,
    DialogZimmerVimeo,
    DialogStrykerList,
    ExhZimmerComponent,
    ExhAmgenComponent,
    ExhSmithComponent,
    ExhMedpharmaComponent,
    ExhPfizerComponent,
    ExhDepuyComponent,
    ExhStrykerComponent,
    ExhAmicoComponent,
    MessageComponent,
    Library2020Component,
    Library2019Component,
    Library2018Component,
    Library2016Component,
    LibraryComponent,
    GalleryComponent,
    DialogGallery,
    DialogLibrary,
    DialogLibrary16,
    DialogLibrary18,
    DialogLibrary19,
    DialogLibrary20,
    RegisterSoonComponent,
    DialogSpeaker4,
    DialogSociety,
    DialogSociety2,
    CheckoutCoupon,
    DialogExhibition,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,

    BrowserAnimationsModule,

    ReactiveFormsModule,

    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    // NoopAnimationsModule,
    // CommonModule,

    MatDialogModule,
    IvyGalleryModule,
    MatTooltipModule,
    
    MatDialogModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpInterceptorsProvider, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
