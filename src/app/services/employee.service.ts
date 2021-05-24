import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from 'src/global';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = "http://localhost:8080/employee/"; 

  constructor(
    private http: HttpClient
    ) { }

  getEmployee(employee_id: number){
    return this.http
    .get<Employee>(this.baseUrl + employee_id);
  }

}
