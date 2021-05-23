import { NgModule } from '@angular/core';
import { MatSliderModule  } from '@angular/material/slider';  
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';

const MaterialComponents = [
  MatSliderModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatExpansionModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }