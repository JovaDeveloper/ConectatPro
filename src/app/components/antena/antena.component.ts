import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../../servicio/api.service';

@Component({
  selector: 'app-antena',
  templateUrl: './antena.component.html',
  styleUrls: ['./antena.component.css']
})
export class AntenaComponent implements OnInit {

  dtOptions : DataTables.Settings = {};
  dtTrigger = new Subject();

  data_antena : any[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.dtOptions = 
    {
      pagingType: 'full_numbers',
      pageLength:5,
      language:{
      url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
    }
  };
  this.getAntenas();
}

getAntenas()
{
  this.apiService.obtenerAntenas().subscribe
  (
    res => 
    {
      this.data_antena = res["data"];
    },
    err => console.error(err)
  );
}

deleteAntena(id:string)
{
  this.apiService.eliminarAntena(id).subscribe
  (
    res => 
    {
      console.log(res);
      this.getAntenas();
    },
    err => console.error(err)
  )
}



}
