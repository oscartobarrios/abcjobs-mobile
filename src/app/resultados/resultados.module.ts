import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";

import { ExamenComponent } from "../examen/components/examenes/examen.component";
import { ListarPruebasComponent } from "../examen/components/listar-pruebas/listar-pruebas.component";
import { PruebaComponent } from "../examen/components/prueba/prueba.component";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule } from "@angular/forms";
import { ResultadosComponent } from './components/resultados.component';

@NgModule({
  declarations: [
    ResultadosComponent
  ],
  exports: [
    ResultadosComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),

  ]
})
export class ResultadosModule { }
