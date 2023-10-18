import { Component, OnInit } from '@angular/core';
import { Prueba, Respuesta } from '../prueba/prueba';
import { PruebasService } from './pruebas.service';
import { Examen } from '../prueba/prueba';



@Component({
  selector: 'app-listar-pruebas',
  templateUrl: './listar-pruebas.component.html',
  styleUrls: ['./listar-pruebas.component.css']
})
export class ListarPruebasComponent implements OnInit {

  public misexamenes :  Array<Examen> = [];
  examenSeleccionado = false;
  codExamen = 0;
  //constructor() { }
  constructor(private pruebasService: PruebasService) {
    this.getPruebasWs()
  }

  getPruebasList(): Array<Prueba> {

    const datosPrueba = [

      new Prueba("5352686694170624", "Java", "Developer","Technical")

     ];
    return datosPrueba;
  }

  getPruebasWs() {
    this.pruebasService.getPruebas().subscribe(datos => {
      //this.mispruebas = datos;
      this.misexamenes = datos;
      console.log(this.misexamenes)

    });
  }

  ngOnInit() {
    //this.mispruebas = this.getPruebasList();
    //this.getPruebasWs();


  }

  seleccionaExamen(examen:number){
    this.examenSeleccionado = true;
    this.codExamen = examen
  }

  examenFinalizado(rta:Respuesta[]){
    console.log(rta)
    this.examenSeleccionado = false;
    this.codExamen = 0

  }


}
