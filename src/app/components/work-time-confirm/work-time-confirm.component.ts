import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { BookingDay } from 'src/app/models/booking-day';
import { ActivityService } from 'src/app/services/activity.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-work-time-confirm',
  templateUrl: './work-time-confirm.component.html',
  styleUrls: ['./work-time-confirm.component.scss']
})
export class WorkTimeConfirmComponent implements AfterContentInit, DoCheck{
  @Input() bookingDay: BookingDay = new BookingDay;
  activities: Activity[] = [];
  sum: number = 0;
  
  constructor(
    private global: Global,
    private activityService: ActivityService
  ) { 
  }

  ngAfterContentInit(): void {
    this.activityService.getActivitiesByBookingDayId(this.bookingDay.id)
    .subscribe(
      resp => {
        this.activities = resp;
      },
      err => console.log(err)
    )
  }

  ngDoCheck(): void {
    this.sort();
    this.sum = 0;
    this.activities.forEach(
      activity => this.sum += activity.duration
    )
  }

  sort(){
    if(this.activities.length >=2){
      this.activities.sort(function(a,b){
        var act1 = a.project.id  
        var act2 = b.project.id  
        return act1 > act2 ? 1 : -1;    
      }
      );
    }
  }
  
}
