import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UkAlertModule, UkAnimationModule } from 'ngx-uikit';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UkAlertModule,
    UkAnimationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
