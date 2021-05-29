import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { CalendarComponent } from './routes/calendar/calendar.component';
import { StatisticsComponent } from './routes/statistics/statistics.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { ActivityComponent } from './components/activity/activity.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Global } from 'src/global';
import { EmpToProjService } from './services/emp-to-proj.service';
import { BookingDayComponent } from './components/booking-day/booking-day.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { DatePipe } from '@angular/common';
import { SickComponent } from './components/sick/sick.component';
import { WorkTimeStatusComponent } from './components/work-time-status/work-time-status.component';
import { WorkTimeConfirmComponent } from './components/work-time-confirm/work-time-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    StatisticsComponent,
    SettingsComponent,
    ActivityComponent,
    BookingDayComponent,
    VacationComponent,
    SickComponent,
    WorkTimeStatusComponent,
    WorkTimeConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Global,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ActivityComponent
  ]
})
export class AppModule { }
