import { Time } from "@angular/common";
import { Employee } from "./employee";

export class Options {

    public id: number;
    public start: Time;
    public end: Time;
    public breakHours: number;
    public vacDesc: string;
    public sickDesc: string;
    public employee: Employee;

    constructor(){

    }
}
