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
import { CoopModule } from './coop/coop.module';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    CoopModule,
    PlayerModule
  ]
})

export class ModulesModule { }
