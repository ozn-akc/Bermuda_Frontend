import { Injectable } from "@angular/core";
import { Employee } from "./app/models/employee";
import { EmployeeService } from "./app/services/employee.service";

@Injectable()
export class Global  {

    currentItem: Number = 0;
    employee: Employee = new Employee;

    constructor(){
        this.employee.id = 1;
    }
}
