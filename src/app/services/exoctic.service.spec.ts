import { TestBed } from '@angular/core/testing';

import { ExocticService } from './exoctic.service';

describe('ExocticService', () => {
  let service: ExocticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExocticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
