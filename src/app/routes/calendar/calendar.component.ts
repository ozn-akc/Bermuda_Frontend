import { Component, OnInit } from '@angular/core';
import { Global } from 'src/global';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(public global: Global) { 
    global.currentItem = 1
  }

  ngOnInit(): void {
  }

}
