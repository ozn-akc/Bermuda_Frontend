import { Injectable } from "@angular/core";
import { Employee } from "./app/models/employee";
import { EmployeeService } from "./app/services/employee.service";

@Injectable()
export class Global  {

    currentItem: Number = 0;
    employee: Employee = new Employee;

    constructor(
        private employeeService: EmployeeService
    ){
        this.employee.id = 1;
        employeeService.getEmployee(1)
        .subscribe(
            resp => {
                this.employee = resp
            },
            err => console.log(err),
        )
    }
}
