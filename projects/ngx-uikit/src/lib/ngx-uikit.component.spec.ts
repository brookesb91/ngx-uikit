import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUikitComponent } from './ngx-uikit.component';

describe('NgxUikitComponent', () => {
  let component: NgxUikitComponent;
  let fixture: ComponentFixture<NgxUikitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUikitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUikitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
