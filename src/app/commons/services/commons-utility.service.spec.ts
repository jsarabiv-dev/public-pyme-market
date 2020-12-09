import { TestBed } from '@angular/core/testing';

import { CommonsUtilityService } from './commons-utility.service';

describe('CommonsUtilityService', () => {
  let service: CommonsUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonsUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
