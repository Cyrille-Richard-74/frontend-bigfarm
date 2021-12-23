//CORE MODULE
/* Used in app.module.ts */

/**
 * Import Angular Dependancies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * Import Project's Components
 */
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { ModalComponent } from './partials/modal/modal.component';

/**
 * Constants Definition
 */
const routes: Routes = []


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
