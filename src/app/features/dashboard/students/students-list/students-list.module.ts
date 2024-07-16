import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsListRoutingModule } from './students-list-routing.module';
import { StudentsListComponent } from './students-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    StudentsListComponent
  ],
  exports:[ 
    StudentsListComponent
  ],
  imports: [
    CommonModule,
    StudentsListRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    SharedModule
  ]
})
export class StudentsListModule { }
