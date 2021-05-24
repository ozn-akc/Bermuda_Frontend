import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
export class BookingDayComponent {
  bookingDay: BookingDay = new BookingDay;
  activities: Activity[] = [];

  constructor(
    public global: Global,
    private bookingDayService: BookingDayService,
    private activityService: ActivityService,
    private dialog: MatDialog
    ) { 
      bookingDayService.getBookingDayById(1)
      .subscribe(
        resp =>{
          this.bookingDay = resp
          this.activityService.getActivitiesByBookingDayId(resp.id)
          .subscribe(
            resp =>{
              this.activities = resp
              console.log(resp)
            },
            err => console.log(err),
          );
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

}
