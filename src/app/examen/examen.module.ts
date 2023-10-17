import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";

import { ExamenComponent } from "./components/examenes/examen.component";
import { ListarPruebasComponent } from "./components/listar-pruebas/listar-pruebas.component";
import { PruebaComponent } from "./components/prueba/prueba.component";


@NgModule({
  declarations: [
    ExamenComponent,
    ListarPruebasComponent,
    PruebaComponent
  ],
  exports: [
    ExamenComponent,
    ListarPruebasComponent,
    PruebaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ExamenModule{}
