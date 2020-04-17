import { TestBed } from '@angular/core/testing';

import { BrotesService } from './brotes.service';

describe('BrotesService', () => {
  let service: BrotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
