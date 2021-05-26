import { AfterViewInit, Component, Inject, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity';
import { Employee } from 'src/app/models/employee';
import { Options } from 'src/app/models/options';
import { Project } from 'src/app/models/project';
import { ActivityService } from 'src/app/services/activity.service';
import { EmpToProjService } from 'src/app/services/emp-to-proj.service';
import { OptionService } from 'src/app/services/option.service';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss']
})
export class VacationComponent{
  title: string = "Aktivität";
  project: Project = new Project;
  options: Options = new Options;
  activity: Activity = new Activity; 
  start: Date = new Date;
  end: Date = new Date;

  constructor(
    public global: Global,
    private projectService: ProjectService,
    private optionsService: OptionService,
    private activityService: ActivityService,
    private dialogRef: MatDialogRef<VacationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
    projectService
    .getProject(1)
    .subscribe(
      resp =>{ 
        this.project = resp
      },
      err => console.log(err),
    );
    optionsService
    .getOptions(global.employee.id)
    .subscribe(
      resp => {
        this.options = resp
        this.activity.description = resp.vacDesc
      },
      err => console.log(err),
    );
    this.activity.duration = 8;
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

}
