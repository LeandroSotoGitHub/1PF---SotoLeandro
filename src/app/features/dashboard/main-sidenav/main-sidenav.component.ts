import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrl: './main-sidenav.component.css'
})
export class MainSidenavComponent {
  showFiller = false;
  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer() {
    this.drawer.toggle();
  }
}
