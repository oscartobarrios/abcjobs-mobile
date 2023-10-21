import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './components/resultados.component';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule } from "@angular/forms";
import { PruebaComponent } from '../examen/components/prueba/prueba.component';
import { ListarPruebasComponent } from '../examen/components/listar-pruebas/listar-pruebas.component';

@NgModule({
  declarations: [
    ResultadosComponent,
  ],
  exports: [
    ResultadosComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,

  ]
})
export class ResultadosModule { }
