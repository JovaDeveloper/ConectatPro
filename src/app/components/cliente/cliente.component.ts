import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../../servicio/api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  dtOptions : DataTables.Settings = {};
  dtTrigger = new Subject();

  clients : any = [];
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.dtOptions = 
    {
      pagingType: 'full_numbers',
      pageLength:5,
      language:{
      url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
    }
  };
  this.getClientes();
}

getClientes()
{
  this.apiService.obtenerClientes().subscribe(
    res => 
    {
      this.clients = res["data"];
    },
    err => 
    {
      console.error(err);
      
    }
  );
}

deleteCliente(id:string)
{
  this.apiService.eliminarCliente(id).subscribe
  (
    res => 
    {
      console.log(res);
      this.getClientes();
      
    },
    err => console.log(err)
    
  )
}


}
