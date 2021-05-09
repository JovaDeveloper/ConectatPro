import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ApiService } from './servicio/api.service';
import { CrearVendedorComponent } from './components/crear-vendedor/crear-vendedor.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { InstaladorComponent } from './components/instalador/instalador.component';
import { CrearInstaladorComponent } from './components/crear-instalador/crear-instalador.component';
import { AntenaComponent } from './components/antena/antena.component';
import { CrearAntenaComponent } from './components/crear-antena/crear-antena.component';
import { CrearRouterComponent } from './components/crear-router/crear-router.component';
import { RouterComponent } from './components/router/router.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClienteComponent,
    CrearClienteComponent,
    CrearVendedorComponent,
    VendedorComponent,
    InstaladorComponent,
    CrearInstaladorComponent,
    AntenaComponent,
    CrearAntenaComponent,
    CrearRouterComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule
    
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
