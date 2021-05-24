import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivityComponent } from 'src/app/components/activity/activity.component';
import { Global } from 'src/global';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  constructor(public global: Global,private dialog: MatDialog) { 
    global.currentItem = 1
  }

}
