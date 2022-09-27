import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRouterComponent } from './dashboard-router/dashboard-router.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardMyDetailComponent } from './dashboard-my-detail/dashboard-my-detail.component';


@NgModule({
  declarations: [
    DashboardRouterComponent,
    DashboardHomeComponent,
    DashboardMyDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
  ,
  exports:[DashboardHomeComponent]
})
export class DashboardModule {

}
