import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ukAnimation]',
})
export class UkAnimationDirective {
  protected animation: UkAnimationMode;

  @HostBinding('class')
  get animationClass(): string {
    return `uk-animation-${this.animation}`;
  }

  @Input() set ukAnimation(value: UkAnimationMode) {
    this.animation = value;
  }
}

export declare type UkAnimationMode =
  'fade'
  | 'scale-up'
  | 'scale-down'
  | 'slide-top'
  | 'slide-bottom'
  | 'slide-left'
  | 'slide-right'
  | 'slide-top-small'
  | 'slide-bottom-small'
  | 'slide-left-small'
  | 'slide-right-small'
  | 'slide-top-medium'
  | 'side-bottom-medium'
  | 'slide-left-medium'
  | 'slide-right-medium'
  | 'kenburns'
  | 'shake'
  ;
