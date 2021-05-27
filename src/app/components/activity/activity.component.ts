import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity';
import { Project } from 'src/app/models/project';
import { ActivityService } from 'src/app/services/activity.service';
import { EmpToProjService } from 'src/app/services/emp-to-proj.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  title: string = "Aktivität";
  projects: Project[] = [];
  activity: Activity = new Activity;
  currProj: Project = new Project;

  constructor(
    public global: Global,
    private empToProjService: EmpToProjService,
    private activityService: ActivityService,
    private dialogRef: MatDialogRef<ActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
    empToProjService
    .getEmployeeToProjectsByEmployeeId(1)
    .subscribe(
      resp =>{
        resp.forEach(
          res => {
            this.projects.push(res.project);
            this.activity.project = res.project;
          }
        )
      },
      err => console.log(err),
    );
    if(data !== null){
      if(data.bookingDay !== null){
        this.activity.bookingDay = data.bookinday;
      }
      if(data.activity !== null){
        this.activity = data.activity;
      }
    }
  }

  compareFn = this._compareFn.bind(this);

  _compareFn(a:Project, b:Project) {
    // Handle compare logic (eg check if unique ids are the same)
    return a.id === b.id;
  }

  close(){
    this.dialogRef.close();
  }

  save(){
    this.activityService.saveAktivity(this.activity)
    .subscribe(
      resp =>{
        this.activity = resp as Activity
      },
      err => console.log(err),
    );
    this.dialogRef.close();
  }

  delete(){
    this.activityService.deleteAktivity(this.activity)
    .subscribe(
      resp =>{
        this.activity = resp as Activity
      },
      err => console.log(err),
    );
    this.dialogRef.close();
  }

  copy(){
    this.activityService.saveCopyLastDay(this.activity)
    .subscribe(
      resp =>{
        this.activity = resp as Activity
      },
      err => console.log(err),
    );
    this.dialogRef.close();
  }
}
