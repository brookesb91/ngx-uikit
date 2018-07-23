import { NgModule } from '@angular/core';
import { NgxUikitComponent } from './ngx-uikit.component';

import { UkAlertModule } from './alert/uk-alert.module';

const MODULES = [
  UkAlertModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [NgxUikitComponent],
  exports: [NgxUikitComponent, ...MODULES]
})
export class NgxUikitModule { }
