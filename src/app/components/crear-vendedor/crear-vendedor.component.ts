import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../../modelo/Vendedor';
import { ApiService } from '../../servicio/api.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-crear-vendedor',
  templateUrl: './crear-vendedor.component.html',
  styleUrls: ['./crear-vendedor.component.css']
})
export class CrearVendedorComponent implements OnInit {

  vendedor : Vendedor =
  {
    id : '',
    nombre_completo : '',
    telefono : '',
    categoria : '',
    direccion : '',
    tipo_vendedor : '',
    created_by : '',
    created_at : '',
    updated_by : '',
    updated_at : ''
  }
  edit : boolean = false;
  constructor( private apiService: ApiService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id)
    {
      this.apiService.obtenerVendedor(params.id).subscribe
      (
        res =>
        {
          console.log(res);
          this.vendedor = res["data"][0];
          console.log(res);
          this.edit = true;
        },
        err => console.error(err)
        
      )
    }
  }

  guardarVendedor()
  {
    delete this.vendedor.id;
    console.log(this.vendedor);
    this.apiService.agregarVendedor(this.vendedor).subscribe
    (
      res => 
      {
        console.log(res);
        this.router.navigate(['/vendedor']);
      },
      err => console.error(err)
      
    )
  }

  actualizarVendedor()
  {
    delete this.vendedor.id;
    console.log(this.vendedor);
  }

}
