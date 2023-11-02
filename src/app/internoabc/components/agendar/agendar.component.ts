import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {
  ionicForm!: FormGroup;
  constructor(public formBuilder: FormBuilder) {}
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      fecha: [],
      link: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', [Validators.minLength(2)]],
      empresa: ['', [Validators.required, Validators.minLength(2)]],
      oferta: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      candidato: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm = () => {
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };
}
