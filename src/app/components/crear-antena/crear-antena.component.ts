import { Component, OnInit } from '@angular/core';
import { Antena } from '../../modelo/Antena';
import { ApiService} from '../../servicio/api.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-crear-antena',
  templateUrl: './crear-antena.component.html',
  styleUrls: ['./crear-antena.component.css']
})
export class CrearAntenaComponent implements OnInit {

  antena : Antena =
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
  };

  edit : boolean = false;

  constructor(private apiService:ApiService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id)
    {
      this.apiService.obtenerAntena(params.id).subscribe
      (
        res => 
        {
          this.antena = res["data"][0];
          console.log(res);
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }



  guardarAntena()
  {
    delete this.antena.id;
    delete this.antena.updated_at;
    delete this.antena.updated_by;
    console.log(this.antena);
    this.apiService.agregarAntena(this.antena).subscribe
    (
      res => 
      {
        console.log(res);
        this.router.navigate(['/antena']);
      },
      err => console.error(err)
    )
  }

  actualizarAntena()
  {
    console.log(this.antena);
    this.apiService.actualizarCliente(this.antena.id, this.antena).subscribe
    (
      res =>
      {
        console.log(res);
        this.router.navigate(['/antena']);
      },
      err => console.log(err)
    )
  }

}
