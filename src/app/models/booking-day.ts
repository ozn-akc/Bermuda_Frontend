import { Employee } from "./employee";

export class BookingDay {

    public id: number = 0;
    public date: Date = new Date;
    public start: Date = new Date;
    public end: Date = new Date;
    public breakHours: number = 0;
    public employee: Employee = new Employee;

    constructor(){
        
    }
}
