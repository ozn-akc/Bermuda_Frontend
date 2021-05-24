import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeToProject } from '../models/employee-to-project';

@Injectable({
  providedIn: 'root'
})
export class EmpToProjService {

  private baseUrl: string = "http://localhost:8080/employeetoproject/employee/"; 

  constructor(
    private http: HttpClient
    ) { }

  getEmployeeToProjectsByEmployeeId(employee_id: number){
    return this.http
    .get<EmployeeToProject[]>(this.baseUrl + employee_id);
  }
}
