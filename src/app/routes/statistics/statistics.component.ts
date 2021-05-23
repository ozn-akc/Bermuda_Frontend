import { Component, OnInit } from '@angular/core';
import { Global } from 'src/global';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(public global: Global) {
    global.currentItem = 2
   }

  ngOnInit(): void {
  }

}
