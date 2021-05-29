import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Data } from '@angular/router';
import * as moment from 'moment';
import { Activity } from 'src/app/models/activity';
import { BookingDay } from 'src/app/models/booking-day';
import { ActivityService } from 'src/app/services/activity.service';
import { BookingDayService } from 'src/app/services/booking-day.service';
import { Global } from 'src/global';
import { ActivityComponent } from '../activity/activity.component';

@Component({
  selector: 'app-booking-day',
  templateUrl: './booking-day.component.html',
  styleUrls: ['./booking-day.component.scss']
})
export class BookingDayComponent implements AfterContentInit{
  @Input() bookingDay: BookingDay = new BookingDay;
  activities: Activity[] = [];
  maxHours: number = 0;
  currHours: number = 0;
  maxBreakHours: number = 0;

  constructor(
    public global: Global,
    private activityService: ActivityService,
    private bookingDayService: BookingDayService,
    private dialog: MatDialog
    ) { 
    } 

    
  ngAfterContentInit(): void {
    this.activityService.getActivitiesByBookingDayId(this.bookingDay.id)
    .subscribe(
      resp =>{
        this.activities = resp;
        var a = 0;
        resp.forEach(
          act => this.currHours += act.duration
        );
      },
      err => console.log(err),
    );
    this.refreshMaxValues();
  }

  convertDateToNumber(d1:Date){
    var hm1 = d1.toString().split(/[.:]/);
    var h1 = parseInt(hm1[0], 10);
    var m1 = hm1[1] ? parseInt(hm1[1], 10) : 0;
    return h1 + ((m1*10/6)/100);
  }

    openActivity() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        bookinday: this.bookingDay,
        activity: null
      };
      this.dialog.open(ActivityComponent, dialogConfig);
    }

    openActivityWithActivity(data: Data) {
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        bookinday: null,
        activity: data
      };
      this.dialog.open(ActivityComponent, dialogConfig);
    }

    saveBookingDay(){
      this.bookingDayService.saveBookingDay(this.bookingDay)
      .subscribe(
        resp =>{
          this.bookingDay = resp as BookingDay
        },
        err => console.log(err),
      );
    }

    refreshMaxValues(){
      this.maxHours = 0;
      this.maxBreakHours = 0;
      this.maxHours += this.convertDateToNumber(this.bookingDay.end);
      this.maxHours -= this.convertDateToNumber(this.bookingDay.start);
      this.maxBreakHours = this.maxHours;
      this.maxBreakHours -= this.bookingDay.employee.hoursPerWeek/5;
      this.maxHours -= this.bookingDay.breakHours;
    }
  }
