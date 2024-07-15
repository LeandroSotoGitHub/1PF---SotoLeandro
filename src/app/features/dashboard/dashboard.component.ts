import { Component, ViewChild } from '@angular/core';
import { MainSidenavComponent } from './main-sidenav/main-sidenav.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    @ViewChild (MainSidenavComponent) MainSidenavComponent!: MainSidenavComponent;
  
    onToggleSidenav() {
      this.MainSidenavComponent.toggleDrawer();
}
}
