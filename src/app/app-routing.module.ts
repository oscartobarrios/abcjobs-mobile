import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamenComponent } from './examen/components/examenes/examen.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarPruebasComponent } from './examen/components/listar-pruebas/listar-pruebas.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'inicio',
    component:InicioComponent

  },
  {
    path: 'prueba',
    component:ListarPruebasComponent

  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'examen/:id',
    component:ExamenComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
