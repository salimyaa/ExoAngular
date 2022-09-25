import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyIdentityComponent } from './component/my-identity/my-identity.component';
import { MyDescriptionComponent } from './component/my-description/my-description.component';
import { InfoPageComponent } from './component/info-page/info-page.component';
import { ContactPageComponent } from './component/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MyIdentityComponent,
    MyDescriptionComponent,
    InfoPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
