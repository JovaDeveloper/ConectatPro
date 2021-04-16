import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../modelo/Cliente'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URI = 'http://192.168.11.50:3000'
  constructor(private http:HttpClient) { }

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

  actualizarCliente( id : string, actualizarCliente: Cliente): Observable<Cliente>
  {
    return this.http.put(`${this.API_URI}/${id}`, actualizarCliente)
  }
}
