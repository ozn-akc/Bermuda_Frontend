import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity';
import { Options } from 'src/app/models/options';
import { Project } from 'src/app/models/project';
import { ActivityService } from 'src/app/services/activity.service';
import { BookingDayService } from 'src/app/services/booking-day.service';
import { OptionService } from 'src/app/services/option.service';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss']
})
export class VacationComponent {
  title: string = "Aktivität";
  options: Options = new Options;
  activity: Activity = new Activity;
  start: Date = new Date;
  end: Date = new Date;

  constructor(
    public global: Global,
    private projectService: ProjectService,
    private optionsService: OptionService,
    private bookingDayService: BookingDayService,
    private activityService: ActivityService,
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<VacationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    projectService
      .getProject(1)
      .subscribe(
        resp => {
          this.activity.project = resp
        },
        err => console.log(err),
      );
    optionsService
      .getOptions(global.employee.id)
      .subscribe(
        resp => {
          this.options = resp
          this.activity.bookingDay.start = resp.start
          this.activity.bookingDay.end = resp.end
          this.activity.bookingDay.breakHours = resp.breakHours
        },
        err => console.log(err),
      );
    this.activity.bookingDay
    this.activity.duration = 8;
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    console.log(this.activity)
    this.activityService.saveAktivityInTimeSpan(
      this.activity,
      this.global.employee.id,
      this.datePipe.transform(this.start, "YYYY-MM-dd"),
      this.datePipe.transform(this.end, "YYYY-MM-dd")
    )
      .subscribe(
        resp => {
          console.log(resp)
        },
        err => console.log(err)
      )
    this.dialogRef.close();
  }

}
