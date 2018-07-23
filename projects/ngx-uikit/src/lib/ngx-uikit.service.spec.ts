import { TestBed, inject } from '@angular/core/testing';

import { NgxUikitService } from './ngx-uikit.service';

describe('NgxUikitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxUikitService]
    });
  });

  it('should be created', inject([NgxUikitService], (service: NgxUikitService) => {
    expect(service).toBeTruthy();
  }));
});
