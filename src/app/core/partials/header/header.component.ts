// HEADER COMPONENT
/* Used in core.module.ts */

/**
 * Import Angular Dependancies
 */
import { Component, OnInit } from '@angular/core';

/**
 * Import Project's Config
 */
import { AppConfig } from 'src/app/configs/app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  title: string = AppConfig.appTitle

  constructor() { }

  ngOnInit(): void {
  }

}
