import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UkAnimationDirective } from './uk-animation.directive';
import { UkAnimationToggleDirective } from './uk-animation-toggle.directive';

@NgModule({
  declarations: [UkAnimationDirective, UkAnimationToggleDirective],
  imports: [CommonModule],
  exports: [UkAnimationDirective, UkAnimationToggleDirective],
  providers: [],
})
export class UkAnimationModule { }
