import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {FirstPageComponent } from './first-page/first-page.component';
import {EventsComponent} from './events/events.component';
import{PastEventsComponent} from './past-events/past-events.component';
import {UpcomingEventsComponent} from './upcoming-events/upcoming-events.component';
import { InterestsComponent} from './interests/interests.component';
import {EventDisplayComponent} from './event-display/event-display.component';
import {AboutPageComponent} from './about-page/about-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'signup' , component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile-page' , component: ProfilePageComponent},
  {path: 'first-page' , component: FirstPageComponent},
  {path: 'events' , component: EventsComponent},
  {path: 'past-events' , component: PastEventsComponent},
  {path: 'upcoming-events' , component:UpcomingEventsComponent },
  {path: 'interests' , component: InterestsComponent},
  {path: 'event-display' , component:EventDisplayComponent},
  {path: 'about-page' , component:AboutPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    anchorScrolling: 'enabled'})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignupComponent];
