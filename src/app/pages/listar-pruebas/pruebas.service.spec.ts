/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PruebasService } from './pruebas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Pruebas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PruebasService]
    });
  });

  it('should ...', inject([PruebasService], (service: PruebasService) => {
    expect(service).toBeTruthy();
  }));
});
