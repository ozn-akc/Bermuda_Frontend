import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private baseUrl: string = "http://localhost:8080/stats/"; 

  constructor(
    private http: HttpClient
    ) { }

  getDefaultStatistics(employee_id: number, from: string | null, def: number){
    return this.http
    .get<any>(this.baseUrl + employee_id  +"/" + from + "/span=" + def );
  }

  getCustomStatistics(employee_id: number, from: string | null, to: string | null){
    return this.http
    .get<any>(this.baseUrl + employee_id  +"/" + from + "/" + to );
  }
}
