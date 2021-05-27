import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivityComponent } from 'src/app/components/activity/activity.component';
import { SickComponent } from 'src/app/components/sick/sick.component';
import { VacationComponent } from 'src/app/components/vacation/vacation.component';
import { ActivityService } from 'src/app/services/activity.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(
    public global: Global,
    private dialog: MatDialog
    ) { 
  }

  ngAfterViewInit(): void {
    this.global.currentItem = 0
  }

  openVacation() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(VacationComponent, dialogConfig);
  }

  openSickness() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(SickComponent, dialogConfig);
  }


}
