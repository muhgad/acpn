import { TestBed } from '@angular/core/testing';

import { CreditHoursService } from './credit-hours.service';

describe('CreditHoursService', () => {
  let service: CreditHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditHoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
