import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../../servicio/api.service';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {
  dtOptions : DataTables.Settings = {};
  dtTrigger = new Subject();

  data_router : any[];

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
  this.getRouters();
}

getRouters()
{
  this.apiService.obtenerRouters().subscribe
  (
    res => 
    {
      this.data_router = res["data"];
    },
    err => console.error(err)
  );
}

deleteRouter(id:string)
{
  this.apiService.eliminarRouter(id).subscribe
  (
    res => 
    {
      console.log(res);
      this.getRouters();
    },
    err => console.error(err)
  )
}

}
