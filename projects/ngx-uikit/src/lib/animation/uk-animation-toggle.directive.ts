import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ukAnimationToggle]',
})
export class UkAnimationToggleDirective {

  private condition = true;

  @HostBinding('class')
  get animationToggleClass(): string {
    return this.condition ? 'uk-animation-toggle' : '';
  }

  @Input() set ukAnimationToggle(condition: boolean) {
    this.condition = condition;
  }
}
