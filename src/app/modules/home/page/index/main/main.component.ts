// MAIN COMPONENT
/* Used in home.module.ts & home-routing.ts*/

/**
 * Import Angular Dependancies
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
