import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsListModule } from './students-list/students-list.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  exports:[
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    StudentsListModule
  ]
})
export class StudentsModule { }
