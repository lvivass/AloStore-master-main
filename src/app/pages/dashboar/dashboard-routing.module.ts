import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarComponent } from './dashboar.component';


const routes: Routes = [
  { path: '', component: DashboarComponent },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
