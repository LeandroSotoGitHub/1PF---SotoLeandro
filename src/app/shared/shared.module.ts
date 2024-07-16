import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FullNamePipe } from './pipes/full-name.pipe';
import { Font20Directive } from './directives/font20.directive';


@NgModule({
  declarations: [
    FullNamePipe,
    Font20Directive,
  ],
  exports:[
    FullNamePipe,
    Font20Directive
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
