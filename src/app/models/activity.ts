import { BookingDay } from "./booking-day";
import { Project } from "./project";

export class Activity {

    public id: number = 0;
    public description: string = "";
    public duration: number = 0;
    public status: number = 0;
    public project: Project = new Project;
    public bookingDay: BookingDay = new BookingDay;
}
