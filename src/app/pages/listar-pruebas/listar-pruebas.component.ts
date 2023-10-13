import { Component, OnInit } from '@angular/core';
import { Prueba } from '../prueba/prueba';
import { PruebasService } from './pruebas.service';

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
      new Prueba("Ingeniería de software", "Martin Fowler", 4),
      new Prueba("Fútbol 1", "Freddy Rincón", 2),
      new Prueba("Algoritmos", "Dennis Ritchie", 2),
      new Prueba("Estructuras de datos", "Yesid Donoso", 2),
      new Prueba("Fútbol 2", "James Rodríguez", 6),
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
