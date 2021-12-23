// FOOTER COMPONENT
/* Used in core.module.ts*/

/**
 * Import Angular Dependancies
 */
import { Component, OnInit } from '@angular/core';

/**
 * Import Project's Config
 */
import { AppConfig } from 'src/app/configs/app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number = AppConfig.currentYear

  constructor() { }

  ngOnInit(): void {
  }

}
