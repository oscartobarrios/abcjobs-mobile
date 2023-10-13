/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PruebasService } from './pruebas.service';

describe('Service: Pruebas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PruebasService]
    });
  });

  it('should ...', inject([PruebasService], (service: PruebasService) => {
    expect(service).toBeTruthy();
  }));
});
