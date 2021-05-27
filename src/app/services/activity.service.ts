import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl: string = "http://localhost:8080/activity/"; 

  constructor(
    private http: HttpClient
    ) { }

  getActivitiesByBookingDayId(bd_id: number){
    return this.http
    .get<Activity[]>(this.baseUrl + "bookingday/" + bd_id);
  }

  getActivitiyById(id: number){
    return this.http
    .get<Activity>(this.baseUrl + id);
  }

  saveAktivity(activity: Activity){
    return this.http.post(this.baseUrl + "save", activity);
  }

  saveAktivityInTimeSpan(activity: Activity, employeeId: number, start: string | null, end: string | null){
    return this.http.post(this.baseUrl + "save/span", {
      activity,
      employeeId,
      start,
      end
    });
  }

  saveCopyLastDay(activity: Activity){
    return this.http.post(this.baseUrl + "save/copy", activity);
  }

  deleteAktivity(activity: Activity){
    return this.http.request('delete', this.baseUrl + "delete", { body: activity });
  }
}
