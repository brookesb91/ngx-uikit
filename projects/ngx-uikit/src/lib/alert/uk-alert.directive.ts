import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[ukAlert]',
})
export class UkAlertDirective {

  protected classes: string[] = [];

  @HostBinding('class')
  get alertClass(): string {
    return this.classes.join(' ');
  }

  @Input() set ukAlert(value: null | 'primary' | 'success' | 'warning' | 'danger') {
    if (value) {
      this.classes.push(`uk-alert-${value}`);
    }
  }
}
