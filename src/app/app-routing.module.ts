import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent } from './events/events.component';
import {AppComponent} from './app.component';
import {UppcomingEventsComponent } from './uppcoming-events/uppcoming-events.component';
import { PasteventsComponent} from './pastevents/pastevents.component';



const routes: Routes = [
  {path: '' ,component: AppComponent},
  {path: 'events' , component: EventsComponent},
  {path: 'upcomingevents' , component: UppcomingEventsComponent},
  {path: 'pastevents' , component: PasteventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
