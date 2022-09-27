
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardMyDetailComponent} from "./dashboard-my-detail/dashboard-my-detail.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

