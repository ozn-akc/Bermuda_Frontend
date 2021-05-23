import { Component } from '@angular/core';
import { Global } from 'src/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bermuda';
  
  Menu = [
    {id: 0, name: 'home', description: "Home", route:"home"},
    {id: 1, name: 'date_range', description: "Calendar", route:"calendar"},
    {id: 2, name: 'analytics', description: "Statistics", route:"stats"},
    {id: 3, name: 'settings', description: "Settings", route:"settings"}
  ];

  constructor(public global: Global) {

  }

}
