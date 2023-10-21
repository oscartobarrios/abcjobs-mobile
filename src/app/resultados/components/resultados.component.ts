import { Component, OnInit } from '@angular/core';
import {  Respuesta , Examen} from '../../examen/components/prueba/prueba';
import { ResultadoService } from './resultado.service'



@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  [x: string]: any;

  public misexamenes :  Array<Examen> = [];
  examenSeleccionado = false;
  codExamen = 0;


  constructor(private resultadoService : ResultadoService) {
    this.getPruebasWs()
  }


  getPruebasWs() {
    this.resultadoService.getPruebas().subscribe(datos => {
      this.misexamenes = datos;
      console.log(this.misexamenes)

    });
  }

  seleccionaExamen(examen:number){
    this.examenSeleccionado = true;
    this.codExamen = examen
  }

  ngOnInit() {
  }

}
