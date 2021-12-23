// SIDEBAR COMPONENT
/* Used in core.module.ts */

/** Import Angular Dependancies */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `<router-outlet name="sidebar"></router-outlet>`,
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
