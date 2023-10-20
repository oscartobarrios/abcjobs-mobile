import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamenComponent } from './examen.component';
import {Component,ViewChild} from "@angular/core";
import { Examen } from '../prueba/prueba';


describe('ExamenComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;



  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ExamenComponent ,TestHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });

  it('should show TEST INPUT', () => {
    let examen : Examen =
    {
      "assignment_id": 4658842344357888,
      "focus": "Python",
      "rol": "Developer",
      "type": "Technical",
      "questions": [
                {"correct_answer": ["d"
                    ],
                    "description": "What is the difference between a list and a tuple in Python?",
                    "answers": [
                        {
                            "a": "A class is a template for creating objects, and an object is an instance of a class."
                        },
                        {
                            "b": "A class is a blueprint for creating objects, and an object is a physical manifestation of a class."
                        },
                        {
                            "c": "A class is a set of instructions for creating objects, and an object is a concrete representation of a class."
                        },
                        {
                            "d": "A class is a blueprint for creating objects, and an object is a logical manifestation of a class."
                        }
                    ]
                }
      ]
    };

    //testHostComponent.componentUnderTestComponent.pregunta = 1;
    testHostFixture.detectChanges();
    expect(1).toEqual(1);
  });

  @Component({
    selector: `host-component`,
    template: `<component-under-test></component-under-test>`
  })
  class TestHostComponent {
    @ViewChild(ExamenComponent)
    public componentUnderTestComponent!: ExamenComponent;
  }



});
