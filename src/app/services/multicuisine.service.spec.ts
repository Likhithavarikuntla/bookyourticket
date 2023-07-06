import { TestBed } from '@angular/core/testing';

import { MulticuisineService } from './multicuisine.service';

describe('MulticuisineService', () => {
  let service: MulticuisineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MulticuisineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
