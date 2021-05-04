import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../modelo/Cliente';
import { Vendedor } from '../modelo/Vendedor'; 
import { Instalador} from '../modelo/Instalador';
import { Antena } from '../modelo/Antena';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URI = 'http://192.168.11.50:3000'
  constructor(private http:HttpClient) { }
  // Métodos para clientes
  obtenerClientes()
  {
    return this.http.get(`${this.API_URI}/cliente`);
  }

  obtenerCliente( id : string)
  {
    return this.http.get(`${this.API_URI}/cliente/${id}`);
  }

  agregarCliente(cliente:Cliente)
  {
    return this.http.post(`${this.API_URI}/cliente`, cliente);
  }

  eliminarCliente( id : string )
  {
    return this.http.delete(`${this.API_URI}/cliente/${id}`);
  }

  actualizarCliente( id : string | number, actualizarCliente: Cliente): Observable<Cliente>
  {
    return this.http.put(`${this.API_URI}/${id}`, actualizarCliente);
  }

  // Métodos para vendedores
  obtenerVendedores()
  {
    return this.http.get(`${this.API_URI}/vendedor`);
  }

  obtenerVendedor(id:string)
  {
    return this.http.get(`${this.API_URI}/vendedor/${id}`);
  }

  agregarVendedor(vendedor:Vendedor)
  {
    return this.http.post(`${this.API_URI}/vendedor`, vendedor);
  }

  eliminarVendedor( id : string)
  {
    return this.http.delete(`${this.API_URI}/vendedor/${id}`);
  }

  actualizarVendedor(id :string | number, actualizarVendedor:Vendedor) : Observable<Vendedor>
  {
    return this.http.put(`${this.API_URI}/${id}`, actualizarVendedor);
  }

  // Método Instaladores
  obtenerInstaladores()
  {
    return this.http.get(`${this.API_URI}/instalador`);
  }

  obtenerInstalador( id : string )
  {
    return this.http.get(`${this.API_URI}/instalador/${id}`);
  }

  agregarInstalador(instalador : Instalador)
  {
    return this.http.post(`${this.API_URI}/instalador`, instalador);
  }

  eliminarInstalador( id : string )
  {
    return this.http.delete(`${this.API_URI}/instalador/${id}`);
  }

  actualizarInstalador(id : string | number, actualizarInstalador:Instalador) : Observable<Instalador>
  {
    return this.http.put(`${this.API_URI}/${id}`, actualizarInstalador);
  }

  // Método Antena
  obtenerAntenas()
  {
    return this.http.get(`${this.API_URI}/antena`);
  }

  obtenerAntena(id:string)
  {
    return this.http.get(`${this.API_URI}/antena/${id}`);
  }

  agregarAntena(antena:Antena)
  {
    return this.http.post(`${this.API_URI}/antena`, antena)
  }

  eliminarAntena(id:string)
  {
    return this.http.delete(`${this.API_URI}/antena/${id}`);
  }

  actualizarAntena(id:string | number, actualizarAntena:Antena) : Observable<Antena>
  {
    return this.http.put(`${this.API_URI}/${id}`, actualizarAntena);
  }


}
