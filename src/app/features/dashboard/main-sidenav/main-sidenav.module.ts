import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSidenavRoutingModule } from './main-sidenav-routing.module';
import { MainSidenavComponent } from './main-sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StudentsModule } from '../students/students.module';
import {MatListModule} from '@angular/material/list';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    MainSidenavComponent
  ],
  exports:[
    MainSidenavComponent
  ],
  imports: [
    CommonModule,
    MainSidenavRoutingModule,
    StudentsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    SharedModule
  ]
})
export class MainSidenavModule { }
