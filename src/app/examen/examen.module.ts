import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";

import { ExamenComponent } from "./components/examenes/examen.component";
import { ListarPruebasComponent } from "./components/listar-pruebas/listar-pruebas.component";
import { PruebaComponent } from "./components/prueba/prueba.component";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule } from "@angular/forms";

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';


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
    IonicModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule
  ]
})
export class ExamenModule{}
