import { Component, Input } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-work-time-status',
  templateUrl: './work-time-status.component.html',
  styleUrls: ['./work-time-status.component.scss']
})
export class WorkTimeStatusComponent {
  @Input() stats: any;

  constructor(
    private global: Global
  ) { }

}
