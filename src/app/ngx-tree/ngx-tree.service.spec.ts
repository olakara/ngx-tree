import { TestBed, inject } from '@angular/core/testing';

import { NgxTreeService } from './ngx-tree.service';

describe('NgxTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTreeService]
    });
  });

  it('should ...', inject([NgxTreeService], (service: NgxTreeService) => {
    expect(service).toBeTruthy();
  }));
});
