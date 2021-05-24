import { Time } from "@angular/common";
import { Employee } from "./employee";

export class Options {

    public id: number = 0;
    public start: Date = new Date;
    public end: Date = new Date;
    public breakHours: number = 0;
    public vacDesc: string = "";
    public sickDesc: string = "";
    public employee: Employee = new Employee;

    constructor(){

    }
}
