import { Component, OnInit } from '@angular/core';
import { BookingDay } from 'src/app/models/booking-day';
import { BookingDayService } from 'src/app/services/booking-day.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-booking-day',
  templateUrl: './booking-day.component.html',
  styleUrls: ['./booking-day.component.scss']
})
export class BookingDayComponent {
  bookingDay: BookingDay = new BookingDay;

  constructor(
    public global: Global,
    private bookingDayService: BookingDayService
    ) { 
      bookingDayService.getBookingDayById(1)
      .subscribe(
        resp =>{
          this.bookingDay = resp
          console.log(resp)
        },
        err => console.log(err),
      );
    }



}
