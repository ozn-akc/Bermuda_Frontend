import { Component, OnInit } from '@angular/core';
import { Global } from 'src/global';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public global: Global) {
    global.currentItem = 3 }

  ngOnInit(): void {
  }

}
