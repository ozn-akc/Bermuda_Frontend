import { Component, OnInit } from '@angular/core';
import { Options } from 'src/app/models/options';
import { OptionService } from 'src/app/services/option.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  options: Options = new Options;

  constructor(
    public global: Global,
    private optionsService: OptionService
    ) {
    global.currentItem = 3 
    optionsService.getOptions(global.employee.id)
    .subscribe(
      resp => this.options = resp,
      err => console.log(err)
    );
  }

}
