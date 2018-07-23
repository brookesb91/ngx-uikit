import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uk-alert',
  templateUrl: './uk-alert.component.html',
})
export class UkAlertComponent implements OnInit {

  @Input() level: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  @Input() animation: boolean | string;
  @Input() duration = 150;
  @Input() close = true;

  constructor() { }

  ngOnInit(): void { }
}
