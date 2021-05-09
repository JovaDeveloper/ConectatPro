import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { CrearVendedorComponent } from './components/crear-vendedor/crear-vendedor.component';
import { InstaladorComponent } from './components/instalador/instalador.component';
import { CrearInstaladorComponent } from './components/crear-instalador/crear-instalador.component';
import { AntenaComponent } from './components/antena/antena.component';
import { CrearAntenaComponent} from './components/crear-antena/crear-antena.component';
import { RouterComponent } from './components/router/router.component';
import { CrearRouterComponent } from './components/crear-router/crear-router.component';

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
  },

  {
    path: 'vendedor',
    component: VendedorComponent
  },

  {
    path: 'crearVendedor',
    component: CrearVendedorComponent
  },

  {
    path: 'vendedor/editar/:id',
    component: CrearVendedorComponent
  },

  {
    path: 'instalador',
    component: InstaladorComponent
  },

  {
    path: 'crearInstalador',
    component: CrearInstaladorComponent
  },

  {
    path: 'instalador/editar/:id',
    component: CrearInstaladorComponent
  },

  {
    path: 'antena',
    component: AntenaComponent
  },

  {
    path: 'crearAntena',
    component: CrearAntenaComponent
  },

  {
    path: 'antena/editar/:id',
    component: CrearAntenaComponent
  },

  {
    path: 'router',
    component: RouterComponent
  },

  {
    path: 'crearRouter',
    component: CrearRouterComponent
  },

  {
    path: 'router/editar/:id',
    component: CrearRouterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
