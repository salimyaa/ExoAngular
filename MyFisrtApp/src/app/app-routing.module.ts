import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactPageComponent} from './component/contact-page/contact-page.component'


const routes: Routes = [
  {path:'contact', component:ContactPageComponent},
  {path:'module', loadChildren: ()=> import('./info-module/info-module.module').then((m)=>m.InfoModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
