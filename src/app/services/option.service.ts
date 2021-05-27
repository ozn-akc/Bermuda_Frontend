import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Options } from '../models/options';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  private baseUrl: string = "http://localhost:8080/options/"; 

  constructor(
    private http: HttpClient){

    }

  getOptions(employee_id: number){
    return this.http
    .get<Options>(this.baseUrl + employee_id);
  }

  saveOptions(options: Options){
    return this.http
    .post<Options>(this.baseUrl, options);
  }

}
