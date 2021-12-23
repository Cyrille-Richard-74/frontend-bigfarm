// HOME MODULE
/* Used in modules.module.ts */

/**
 * Import Angular Dependancies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Import Project's Modules
 */
import { HomeRoutingModule } from './home-routing.module';

/**
 * Import Project's Components
 */
import { MainComponent } from './page/index/main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
