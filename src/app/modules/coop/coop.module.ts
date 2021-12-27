// COOP MODULE
/* Used in modules.module.ts*/

/**
 * Import Angular Dependancies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CoopRoutingModule } from './coop-routing.module';
import { IndexMainComponent } from './pages/index/main/main.component';
import { CreateMainComponent } from './pages/create/main/main.component';
import { ReadMainComponent } from './pages/read/main/main.component';
import { UpdateMainComponent } from './pages/update/main/main.component';


@NgModule({
  declarations: [
    IndexMainComponent,
    CreateMainComponent,
    ReadMainComponent,
    UpdateMainComponent
  ],
  imports: [
    CommonModule,
    CoopRoutingModule,
    BrowserModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    FormsModule
  ]
})
export class CoopModule { }
