import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BookingDay } from 'src/app/models/booking-day';
import { BookingDayService } from 'src/app/services/booking-day.service';
import { StatisticsService } from 'src/app/services/statistics.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  dateIsDefault = true;
  
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
    private datePipe: DatePipe
    ) {
    global.currentItem = 2;
    }
   
   changeValue(){
    this.dateIsDefault = !this.dateIsDefault;
    console.log(this.bookingDays);
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
      console.log(this.bookingDays);
      this.getCustomBookingDays();
    }
    
    getDefaultBookingDays(){
      this.bookingDayService.getBookingDayInDefSpan(
        this.global.employee.id,
        this.datePipe.transform(this.from, "YYYY-MM-dd"), 
        this.timeSpan
        )
        .subscribe(
          resp => this.bookingDays = resp,
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
          resp => this.bookingDays = resp,
          err => console.log(err)
        )
    }
}
