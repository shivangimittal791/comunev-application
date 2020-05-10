import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { UppcomingEventsComponent } from './uppcoming-events/uppcoming-events.component';
import { PasteventsComponent } from './pastevents/pastevents.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    UppcomingEventsComponent,
    PasteventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
