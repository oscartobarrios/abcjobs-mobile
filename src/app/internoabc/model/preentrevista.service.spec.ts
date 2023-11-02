import { TestBed } from '@angular/core/testing';

import { PreentrevistaService } from './preentrevista.service';

describe('PreentrevistaService', () => {
  let service: PreentrevistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreentrevistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
