import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../../servicio/api.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})

export class VendedorComponent implements OnInit {
  dtOptions : DataTables.Settings = {};
  dtTrigger = new Subject();


  data_vendedor : any[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void 
  {
    this.dtOptions =
      {
        pagingType: 'full_numbers',
        pageLength:5,
        language:{
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
  };
  this.getVendedores();

  }

  getVendedores()
  {
    this.apiService.obtenerVendedores().subscribe
    (
      res =>
      {
        this.data_vendedor = res["data"];
      },
      err => 
      {
        console.error(err);
        
      }
    );
  }

  deleteVendedor(id:string)
  {
    this.apiService.eliminarVendedor(id).subscribe
    (
      res =>
      {
        console.log(res);
        this.getVendedores();
      },
      err => console.error(err)
      
    )
  }



}
