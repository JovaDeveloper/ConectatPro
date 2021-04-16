import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cliente',
    pathMatch: 'full',
  },

  {
    path: 'cliente',
    component: ClienteComponent
  },

  {
    path: 'crearCliente',
    component: CrearClienteComponent
  },

  {
    path: 'cliente/editar/:id',
    component: CrearClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
