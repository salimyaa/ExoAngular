import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactPageComponent} from './component/contact-page/contact-page.component'
import {DashboardRouterComponent} from "./dashboard/dashboard-router/dashboard-router.component";
import {DashboardHomeComponent} from "./dashboard/dashboard-home/dashboard-home.component";
import {DashboardMyDetailComponent} from "./dashboard/dashboard-my-detail/dashboard-my-detail.component";


const routes: Routes = [
  {path:'contact', component:ContactPageComponent},
  {path:'module', loadChildren: ()=> import('./info-module/info-module.module').then((m)=>m.InfoModuleModule)},
  {path:'', redirectTo:'contact',pathMatch:'full'},
  {
    path: 'dashboard', children:
      [
        {path:'',component:DashboardRouterComponent, pathMatch:'full'},
        {path:'home',component:DashboardHomeComponent,pathMatch:'full'},
        {path:'mydetail',component:DashboardMyDetailComponent,pathMatch:'full'}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
