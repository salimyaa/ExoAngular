import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyDescriptionComponent} from '../component/my-description/my-description.component';
import {MyIdentityComponent} from '../component/my-identity/my-identity.component';
import {InfoPageComponent} from '../component/info-page/info-page.component';


const routes: Routes = [
  {
    path:'identity',component:MyIdentityComponent
  },
  {
    path:'infoPage',component:InfoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoModuleRoutingModule { }
