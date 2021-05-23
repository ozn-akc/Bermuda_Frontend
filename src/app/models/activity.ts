import { BookingDay } from "./booking-day";
import { Project } from "./project";

export class Activity {

    public id: number;
    public description: string;
    public duration: number;
    public status: number = 0;
    public project: Project;
    public bookingDay: BookingDay;
}
