import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Global } from 'src/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(public global: Global) { 
  }

  ngAfterViewInit(): void {
    this.global.currentItem = 0
  }

}
