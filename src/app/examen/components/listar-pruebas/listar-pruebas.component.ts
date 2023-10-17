import { Component, OnInit } from '@angular/core';
import { Prueba } from '../prueba/prueba';
import { PruebasService } from './pruebas.service';
import { Pregunta } from '../prueba/pregunta';
@Component({
  selector: 'app-listar-pruebas',
  templateUrl: './listar-pruebas.component.html',
  styleUrls: ['./listar-pruebas.component.css']
})
export class ListarPruebasComponent implements OnInit {
  mispruebas: Array<Prueba> = [];
  private courses1: Array<Prueba> = [];

  //constructor() { }
  constructor(private pruebasService: PruebasService) { }

  getPruebasList(): Array<Prueba> {

    const datosPrueba = [

      new Prueba("5352686694170624", "Java", "Developer","Technical")

     ];
    return datosPrueba;
  }

  getPruebasWs() {
    this.pruebasService.getPruebas().subscribe(datos => {
      this.mispruebas = datos;
      console.log(this.mispruebas)
    });
  }

  ngOnInit() {
    //this.mispruebas = this.getPruebasList();
    this.getPruebasWs();
  }

}
