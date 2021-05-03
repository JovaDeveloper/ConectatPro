import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService} from '../../servicio/api.service';

@Component({
  selector: 'app-instalador',
  templateUrl: './instalador.component.html',
  styleUrls: ['./instalador.component.css']
})

export class InstaladorComponent implements OnInit {
  dtOptions : DataTables.Settings = {};
  dtTrigger = new Subject();

  data_instalador : any[];

  constructor(private apiService:ApiService) { }

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
    this.getInstaladores();
  }

  getInstaladores()
  {
    this.apiService.obtenerInstaladores().subscribe
    (
      res => 
      {
        this.data_instalador = res["data"];
      },
      err => 
      {
        console.error(err)
        
      }
    );    
  }

  deleteInstalador(id:string)
  {
    this.apiService.eliminarInstalador(id).subscribe
    (
      res => 
      {
        console.log(res);
        this.getInstaladores();
      },
      err => console.error(err)
    )
  }



}
