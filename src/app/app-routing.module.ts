import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingComponent } from './modules/upcoming/upcoming.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { EventComponent } from './modules/event/event.component';
import { AgendaComponent } from './modules/event/agenda/agenda.component';
import { ExhibitionComponent } from './modules/event/exhibition/exhibition.component';
import { RegisterComponent } from './modules/event/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterSuccessComponent } from './modules/event/register-success/register-success.component';

import { SocietyComponent } from './modules/event/society/society.component';
import { SponsorsComponent } from './modules/event/sponsors/sponsors.component';
import { TopicsComponent } from './modules/event/topics/topics.component';
import { Speaker3Component } from './modules/event/speaker3/speaker3.component';
import { Speaker4Component } from './modules/event/speaker4/speaker4.component';
import { LiveComponent } from './modules/event/live/live.component';

import { ForgetPassComponent } from './modules/forget-pass/forget-pass.component';
import { CountdownnComponent } from './modules/event/countdownn/countdownn.component';
import { QuestionsComponent } from './modules/event/questions/questions.component';
import { FinishedComponent } from './modules/event/finished/finished.component';

import { Society2Component } from './modules/event/society2/society2.component';
import { ShowImageComponent } from './modules/event/show-image/show-image.component';

import { ShowVedioComponent } from './modules/event/show-vedio/show-vedio.component';

import { CMEGuard } from './core/guards/cme.guard';
import { AgendaVideoComponent } from './modules/event/agenda-video/agenda-video.component';
import { RecordedSessionsComponent } from './modules/event/recorded-sessions/recorded-sessions.component';
import { CertificateComponent } from './modules/event/certificate/certificate.component';
import { CheckoutComponent } from './modules/event/checkout/checkout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Exhibition3dComponent } from './modules/event/exhibition3d/exhibition3d.component';
import { ExhLillyComponent } from './modules/event/exh-lilly/exh-lilly.component';
import { AuditoriumComponent } from './modules/event/auditorium/auditorium.component';
import { ExhAmgenComponent } from './modules/event/exh-amgen/exh-amgen.component';
import { ExhDepuyComponent } from './modules/event/exh-depuy/exh-depuy.component';
import { ExhMedpharmaComponent } from './modules/event/exh-medpharma/exh-medpharma.component';
import { ExhPfizerComponent } from './modules/event/exh-pfizer/exh-pfizer.component';
import { ExhSmithComponent } from './modules/event/exh-smith/exh-smith.component';
import { ExhZimmerComponent } from './modules/event/exh-zimmer/exh-zimmer.component';
import { ExhAmicoComponent } from './modules/event/exh-amico/exh-amico.component';
import { ExhStrykerComponent } from './modules/event/exh-stryker/exh-stryker.component';
import { MessageComponent } from './modules/event/message/message.component';
import { HomeComponent } from './modules/home/home.component';
import { Library2020Component } from './modules/event/library2020/library2020.component';
import { Library2019Component } from './modules/event/library2019/library2019.component';
import { Library2016Component } from './modules/event/library2016/library2016.component';
import { Library2018Component } from './modules/event/library2018/library2018.component';
import { GalleryComponent } from './modules/event/gallery/gallery.component';
import { LibraryComponent } from './modules/event/library/library.component';
import { RegisterSoonComponent } from './modules/event/register-soon/register-soon.component';
const routes: Routes = [
  // { path: '', component: Exhibition3dComponent },
  { path: '', component: HomeComponent },
  // { path: 'gallery', component: GalleryComponent, pathMatch: 'full' },
  // { path: 'library', component: LibraryComponent, pathMatch: 'full' },
  // { path: 'library2020', component: Library2020Component, pathMatch: 'full' },
  // { path: 'library2019', component: Library2019Component, pathMatch: 'full' },
  // { path: 'library2018', component: Library2018Component, pathMatch: 'full' },
  // { path: 'library2016', component: Library2016Component, pathMatch: 'full' },
  // { path: '', component: EventComponent },
  // { path: '', component: UpcomingComponent },
  // { path: 'event/:slug', component: EventComponent, pathMatch: 'full' },
  { path: 'certificate', component: CertificateComponent, pathMatch: 'full' },
  { path: 'agenda', component: AgendaComponent, pathMatch: 'full' },
  { path: 'welcome', component: MessageComponent, pathMatch: 'full' },
  {
    path: 'agenda-video/:activity/:video',
    component: AgendaVideoComponent,
    pathMatch: 'full',
    canDeactivate: [CMEGuard],
  },
  // {
  //   path: 'recorded-sessions',
  //   component: RecordedSessionsComponent,
  //   pathMatch: 'full',
  // },
  { path: 'sponsors', component: ExhibitionComponent, pathMatch: 'full' },
  // { path: 'exhibition3d', component: Exhibition3dComponent, pathMatch: 'full' },

  // {
  //   path: 'exh-medpharma',
  //   component: ExhMedpharmaComponent,
  //   pathMatch: 'full',
  // },
  // { path: 'exh-pfizer', component: ExhPfizerComponent, pathMatch: 'full' },
  // {
  //   path: 'exh-smith-and-nephew',
  //   component: ExhSmithComponent,
  //   pathMatch: 'full',
  // },
  // { path: 'exh-stryker', component: ExhStrykerComponent, pathMatch: 'full' },
  // { path: 'exh-zimmer', component: ExhZimmerComponent, pathMatch: 'full' },
  {
    path: 'show-image/:image',
    component: ShowImageComponent,
    pathMatch: 'full',
  },
  {
    path: 'show-vedio/:link',
    component: ShowVedioComponent,
    pathMatch: 'full',
  },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  {
    path: 'checkout/:user_id',
    component: CheckoutComponent,
    pathMatch: 'full',
  },
  {
    path: 'registersuccess',
    component: RegisterSuccessComponent,
    pathMatch: 'full',
  },
  { path: 'board', component: Speaker3Component, pathMatch: 'full' },
  { path: 'topics', component: TopicsComponent, pathMatch: 'full' },
  { path: 'speakers', component: Speaker4Component, pathMatch: 'full' },
  // { path: 'sponsors', component: SponsorsComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'scientific', component: SocietyComponent, pathMatch: 'full' },
  { path: 'organizing', component: Society2Component, pathMatch: 'full' },

  { path: 'audi', component: AuditoriumComponent, pathMatch: 'full' },
  {
    path: 'live',
    component: LiveComponent,
    pathMatch: 'full',
    canDeactivate: [CMEGuard],
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'forget', component: ForgetPassComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'questions', component: QuestionsComponent, pathMatch: 'full' },
  // { path: 'page/:id', component: AboutComponent },
  { path: 'redirest', redirectTo: 'login' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    MatFormFieldModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
