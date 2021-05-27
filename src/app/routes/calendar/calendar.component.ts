import { DatePipe } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { BookingDay } from 'src/app/models/booking-day';
import { BookingDayService } from 'src/app/services/booking-day.service';
import { Global } from 'src/global';
import { Moment } from 'moment';
import * as moment from 'moment';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, DoCheck{
  
  bookingDays: BookingDay[] = [];

  from: Date = new Date('2021-05-17T00:00:00' );
  to: Date = new Date('2021-05-21T00:00:00' );
  fromString: string | null = "";
  toString: string | null = "";
  
  constructor(
    public global: Global,
    private bookingDayService: BookingDayService,
    private datePipe: DatePipe) { 
    global.currentItem = 1;
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
  
  ngOnInit(): void{
    this.getBookingDays();
  }

  getDiffernceDates(d1:Date, d2:Date): number{
    var a = moment(d1);
    var b = moment(d2);
    var diff = b.diff(a, "days");
    return diff;
  }

  getBookingDays(): void {
    this.bookingDays = [];
    for(var i = 0; i <= this.getDiffernceDates(this.from, this.to); i++) {
      var dateString: string | null = "";
      var date: Date = new Date;
      date = new Date(this.from);
      date.setDate(this.from.getDate()+i);
      dateString = this.datePipe.transform(date, "YYYY-MM-dd")
      this.bookingDayService.getBookingDayByEmpIdAndDate(1, dateString)
      .subscribe(
        resp =>{
          this.bookingDays.push(resp)
        },
        err => console.log(err),
      );
    }
    this.setDateStrings();
  }

  addWeek(){
    this.from.setDate(this.from.getDate()+7);
    this.to.setDate(this.to.getDate()+7);
    this.getBookingDays();
  }

  removeWeek(){
    this.from.setDate(this.from.getDate()-7);
    this.to.setDate(this.to.getDate()-7);
    this.getBookingDays();
  }

  setDateStrings(){
    this.fromString = this.datePipe.transform(this.from, "dd.MM.YYYY");
    this.toString = this.datePipe.transform(this.to, "dd.MM.YYYY");
  }
}
