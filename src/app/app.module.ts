import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './pages/home/home.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListarPruebasComponent } from './pages/listar-pruebas/listar-pruebas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PruebaComponent,
    InicioComponent,
    ListarPruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
