// MODULES MODULE
/* Used in app.module.ts */

/**
 * Import Angular Dependancies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Import Project's Modules
 */
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule
  ]
})

export class ModulesModule { }
