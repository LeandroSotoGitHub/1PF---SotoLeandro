import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsAbmRoutingModule } from './students-abm-routing.module';
import { StudentsAbmComponent } from './students-abm.component';


@NgModule({
  declarations: [
    StudentsAbmComponent
  ],
  imports: [
    CommonModule,
    StudentsAbmRoutingModule
  ]
})
export class StudentsAbmModule { }
