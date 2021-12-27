// COOP ROUTING MODULE
/* Used in coop.module.ts */

/**
 * Import Angular Dependancies
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Import Project's Components
 */
import { IndexMainComponent } from './pages/index/main/main.component';
import { CreateMainComponent } from './pages/create/main/main.component';
import { ReadMainComponent } from './pages/read/main/main.component';
import { UpdateMainComponent } from './pages/update/main/main.component';


/**
 * Contants Definition
 */
const routes: Routes = [{
  path: 'coops',
  children: [
    { path: '', pathMatch: 'full', outlet: 'primary', component: IndexMainComponent },
    { path: 'create', pathMatch: 'full', outlet: 'primary', component: CreateMainComponent },
    { path: ':id', pathMatch: 'full', outlet: 'primary', component: ReadMainComponent },
    { path: ':id/edit', pathMatch: 'full', outlet: 'primary', component: UpdateMainComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoopRoutingModule { }
