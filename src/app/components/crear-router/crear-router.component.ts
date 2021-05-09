import { Component, OnInit } from '@angular/core';
import { Route } from '../../modelo/Router';
import { ApiService } from '../../servicio/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-crear-router',
  templateUrl: './crear-router.component.html',
  styleUrls: ['./crear-router.component.css']
})
export class CrearRouterComponent implements OnInit {

  route : Route =
  {
    id  : '',
    serial : '',
    mac : '',
    status : '',  
    fecha : '',  
    created_by : '',  
    created_at : '',  
    updated_by : '',  
    updated_at  : '' 
  }

  edit : boolean = false;

  constructor(private apiService:ApiService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id)
    {
      this.apiService.obtenerRouter(params.id).subscribe
      (
        res => 
        {
          this.route = res["data"][0];
          console.log(res);
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  guardarRouter()
  {
    delete this.route.id;
    delete this.route.created_at;
    delete this.route.created_by;
    delete this.route.updated_at;
    delete this.route.updated_by;
    console.log(this.route);
    this.apiService.agregarRouter(this.route).subscribe
    (
      res => 
      {
        console.log(res);
        this.router.navigate(['/router']);
      },
      err => console.error(err)
    )
  }

  actualizarRouter()
  {
    console.log(this.router);
    this.apiService.actualizarRouter(this.route.id, this.route).subscribe
    (
      res => 
      {
        console.log(res);
        this.router.navigate(['/router']);
      },
      err => console.log(err)
    )
  }
}
