import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import { NavTopComponent } from './nav-top/nav-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavRightComponent,
    NavTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
