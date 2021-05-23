import { Time } from "@angular/common";
import { Employee } from "./employee";

export class BookingDay {

    public id: number;
    public date: Date;
    public start: Time;
    public end: Time;
    public breakHours: number;
    public employee: Employee;

    constructor(){
        
    }
}
