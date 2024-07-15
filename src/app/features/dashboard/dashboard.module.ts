import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { MainSidenavModule } from './main-sidenav/main-sidenav.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports:[
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ToolbarModule,
    MainSidenavModule
  ]
})
export class DashboardModule { }
