import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity';
import { EmployeeToProject } from 'src/app/models/employee-to-project';
import { Project } from 'src/app/models/project';
import { EmpToProjService } from 'src/app/services/emp-to-proj.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  title: string = "Aktivität";
  emp_to_projects: EmployeeToProject[] = [];
  activity: Activity = new Activity;

  constructor(
    public global: Global,
    private empToProjService: EmpToProjService,
    private dialogRef: MatDialogRef<ActivityComponent>){
    empToProjService
    .getEmployeeToProjectsByEmployeeId(1)
    .subscribe(
      resp =>{
        this.emp_to_projects = resp
      },
      err => console.log(err),
    );
  }

  close(){
    this.dialogRef.close();
  }

  save(){
    this.dialogRef.close();
  }

}
