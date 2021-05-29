import { DatePipe } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { BookingDay } from 'src/app/models/booking-day';
import { ActivityService } from 'src/app/services/activity.service';
import { BookingDayService } from 'src/app/services/booking-day.service';
import { StatisticsService } from 'src/app/services/statistics.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements DoCheck {

  dateIsDefault = true;
  isSelected:boolean = false;
  hasBookingDays = false;

  defaults = [
    {
      value: 0,
      desc: "Vorheriger Monat"
    },
    {
      value: 1,
      desc:"Vorherige Woche"
    },
    {
      value: 2,
      desc:"Woche"
    },
    {
      value: 3,
      desc:"Monat"
    },
    {
      value: 4,
      desc:"Jahr"
    }
  ]

  from: Date = new Date;
  to:Date = new Date;
  timeSpan: number = 0;
  bookingDays: BookingDay[] = [];
  stats: any = {};

  constructor(
    private global: Global,
    private statsService: StatisticsService,
    private bookingDayService: BookingDayService,
    private activityService: ActivityService,
    private datePipe: DatePipe
    ) {
    global.currentItem = 2;
    }

    ngDoCheck(): void {
      this.sort();
    }
  
    sort(){
      if(this.bookingDays.length >=2){
        this.bookingDays.sort(function(a,b){
          var date1 = new Date(a.date).getTime();  
          var date2 = new Date(b.date).getTime();  
          return date1 > date2 ? 1 : -1;    
        }
        );
      }
    }
   
   changeValue(){
    this.dateIsDefault = !this.dateIsDefault;
   }

   getDefaultStats(){
    this.statsService.getDefaultStatistics(
      this.global.employee.id, 
      this.datePipe.transform(this.from, "YYYY-MM-dd"),
      this.timeSpan)
    .subscribe(
      resp => this.stats = resp,
      err => console.log(err)
    )
    this.getDefaultBookingDays();
    this.isSelected = true;
    }

    getCustomStats(){
      this.statsService.getCustomStatistics(
        this.global.employee.id,
        this.datePipe.transform(this.from, "YYYY-MM-dd"), 
        this.datePipe.transform(this.to, "YYYY-MM-dd")
        )
      .subscribe(
        resp => this.stats = resp,
        err => console.log(err)
      )
      this.getCustomBookingDays();
      this.isSelected = true;
    }
    
    getDefaultBookingDays(){
      this.bookingDayService.getBookingDayInDefSpan(
        this.global.employee.id,
        this.datePipe.transform(this.from, "YYYY-MM-dd"), 
        this.timeSpan
        )
        .subscribe(
          resp => {
            this.bookingDays = resp;
            this.hasBookingDays = this.bookingDays.length > 0;
          },
          err => console.log(err)
        )
    }
    
    getCustomBookingDays(){
      this.bookingDayService.getBookingDayInCustomSpan(
        this.global.employee.id,
        this.datePipe.transform(this.from, "YYYY-MM-dd"), 
        this.datePipe.transform(this.to, "YYYY-MM-dd")
        )
        .subscribe(
          resp => {
            this.bookingDays = resp;
            this.hasBookingDays = this.bookingDays.length > 0;
          },
          err => console.log(err)
        )
    }

    confirmTimes(){
      this.bookingDays.forEach(
        bookingDay => {
          this.activityService.saveInitActivityStatus(bookingDay)
          .subscribe()
        }
      )
    }
}
