import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsAbmRoutingModule } from './students-abm-routing.module';
import { StudentsAbmComponent } from './students-abm.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    StudentsAbmComponent
  ],
  exports:[
    StudentsAbmComponent
  ],
  imports: [
    CommonModule,
    StudentsAbmRoutingModule,
    MatButtonModule,
    MatIconModule,
    
  ]
})
export class StudentsAbmModule { }
