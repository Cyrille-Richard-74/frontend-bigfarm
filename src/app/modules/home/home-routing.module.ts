// HOME ROUTING MODULE
/* Used in home.module.ts */

/**
 * Import Angular Dependancies
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Import Project's Components
 */
import { MainComponent } from './page/index/main/main.component';

/**
 * Constants Definition
 */
const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent, outlet: 'primary' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
