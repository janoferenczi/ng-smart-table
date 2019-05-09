import { TestBed } from '@angular/core/testing';

import { NgSmartTableService } from './ng-smart-table.service';

describe('NgSmartTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgSmartTableService = TestBed.get(NgSmartTableService);
    expect(service).toBeTruthy();
  });
});
