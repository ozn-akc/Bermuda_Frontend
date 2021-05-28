import { Component, Input } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-work-time-status',
  templateUrl: './work-time-status.component.html',
  styleUrls: ['./work-time-status.component.scss']
})
export class WorkTimeStatusComponent {
  @Input() from: Date = new Date;
  @Input() to: Date = new Date;

  shouldHours: number = 0;
  haveHours: number = 0;

  constructor(
    private global: Global,
    private activityService: ActivityService
  ) { }

}
