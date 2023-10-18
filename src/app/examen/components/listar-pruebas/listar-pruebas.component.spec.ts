/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListarPruebasComponent } from './listar-pruebas.component';
import { HttpClientModule,HttpClient  } from '@angular/common/http';
import { PruebasService } from './pruebas.service';
import { Prueba } from '../prueba/prueba';


describe('ListarPruebasComponent', () => {
  let component: ListarPruebasComponent;
  let fixture: ComponentFixture<ListarPruebasComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarPruebasComponent ],
      providers: [ PruebasService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPruebasComponent);
    component = fixture.componentInstance;
    for(let i = 0; i < 10; i++) {
      const miprueba = new Prueba(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.mispruebas.push(miprueba);
    }


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
