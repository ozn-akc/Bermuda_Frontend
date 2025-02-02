import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingDay } from '../models/booking-day';

@Injectable({
  providedIn: 'root'
})
export class BookingDayService {

  private baseUrl: string = "http://localhost:8080/bookingday/"; 

  constructor(
    private http: HttpClient
    ) { }

  getBookingDaysByEmployeeId(employee_id: number){
    return this.http
    .get<BookingDay[]>(this.baseUrl + "employee/" + employee_id);
  }

  getBookingDayByEmpIdAndDate(employee_id: number, date: string | null){
    return this.http
    .get<BookingDay>(this.baseUrl +"date/"+ employee_id +"/" + date);
  }

  getBookingDayById(id: number){
    return this.http
    .get<BookingDay>(this.baseUrl + id);
  }

  saveBookingDay(bookingDay: BookingDay){
    return this.http.post(this.baseUrl + "save", bookingDay);
  }

  getBookingDayInDefSpan(employee_id: number, ref: string | null, def: number) {
    return this.http.get<BookingDay[]>(this.baseUrl + "date/" +employee_id +"/" + ref +"/span=" +def);
  }

  getBookingDayInCustomSpan(employee_id: number, from: string | null, to: string | null) {
    return this.http.get<BookingDay[]>(this.baseUrl + "date/" +employee_id +"/" + from +"/" +to);
  }
}
