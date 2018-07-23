import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UkAlertComponent } from './uk-alert.component';
import { UkAlertDirective } from './uk-alert.directive';

@NgModule({
  declarations: [UkAlertComponent, UkAlertDirective],
  imports: [CommonModule],
  exports: [UkAlertComponent, UkAlertDirective],
  providers: [],
})
export class UkAlertModule { }
