import { Component, OnInit } from '@angular/core';
import { Global } from 'src/global';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  dateIsDefault = true;
  
  defaults = [
    {
      value: 1,
      desc: "Vorheriger Monat"
    },
    {
      value: 1,
      desc:"Vorherige Woche"
    },
    {
      value: 1,
      desc:"Woche"
    },
    {
      value: 1,
      desc:"Monat"
    },
    {
      value: 1,
      desc:"Jahr"
    }
  ]

  from: Date = new Date;
  to:Date = new Date;

  timeSpan: string = "";

  constructor(public global: Global) {
    global.currentItem = 2
   }
   
   changeValue(){
    this.dateIsDefault = !this.dateIsDefault;
   }
    
}
