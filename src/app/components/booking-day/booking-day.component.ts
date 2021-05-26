import { stringify } from '@angular/compiler/src/util';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Data } from '@angular/router';
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

  constructor(
    public global: Global,
    private activityService: ActivityService,
    private bookingDayService: BookingDayService,
    private dialog: MatDialog
    ) { }

  ngAfterContentInit(): void {
    this.activityService.getActivitiesByBookingDayId(this.bookingDay.id)
    .subscribe(
      resp =>{
        this.activities = resp
      },
      err => console.log(err),
    );
  }

    openActivity() {
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      this.dialog.open(ActivityComponent, dialogConfig);
    }

    openActivityWithActivity(data: Data) {
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
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

}
