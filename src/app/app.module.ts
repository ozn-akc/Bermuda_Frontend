import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { CalendarComponent } from './routes/calendar/calendar.component';
import { StatisticsComponent } from './routes/statistics/statistics.component';
import { SettingsComponent } from './routes/settings/settings.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


import { Global } from 'src/global';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    StatisticsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
