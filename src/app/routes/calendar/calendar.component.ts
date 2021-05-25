import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { BookingDay } from 'src/app/models/booking-day';
import { BookingDayService } from 'src/app/services/booking-day.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, DoCheck{
  
  bookingDays: BookingDay[] = [];

  from: Date = new Date('2021-05-17T00:00:00' );
  to: Date = new Date('2021-05-21T00:00:00' );

  constructor(
    public global: Global,
    private bookingDayService: BookingDayService) { 
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

  ngOnInit(): void {
    this.bookingDayService.getBookingDayById(1)
    .subscribe(
      resp =>{
        this.bookingDays.push(resp)
      },
      err => console.log(err),
    );
    this.bookingDayService.getBookingDayById(2)
    .subscribe(
      resp =>{
        this.bookingDays.push(resp)
      },
      err => console.log(err),
    );
    this.bookingDayService.getBookingDayById(3)
    .subscribe(
      resp =>{
        this.bookingDays.push(resp)
      },
      err => console.log(err),
    );
    this.bookingDayService.getBookingDayById(4)
    .subscribe(
      resp =>{
        this.bookingDays.push(resp)
      },
      err => console.log(err),
    );
    this.bookingDayService.getBookingDayById(5)
    .subscribe(
      resp =>{
        this.bookingDays.push(resp)
      },
      err => console.log(err),
    );
  }

}
