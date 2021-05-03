import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelo/Cliente';
import { ApiService } from '../../servicio/api.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente : Cliente =
  {
    id : '',
    n_contrato : '',
    nombre_completo : '',
    telefono : '',
    direccion : '',
    paquete : '',
    sector : '',
    estacion : '',
    status : '',
    fecha_contratacion : '',
    created_by : '',
    created_at : '',
    updated_by : '',
    updated_at : '',
    id_instalacion : '',
    id_vendedor : ''
  };

  edit : boolean = false;

  constructor(private apiService: ApiService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params =this.activatedRoute.snapshot.params;
    if(params.id)
    {
      this.apiService.obtenerCliente(params.id)
      .subscribe(
        res => 
        {
          this.cliente = res["data"][0];
          console.log(res);
          this.edit = true;
          
        },
        err => console.error(err)
      )
    }
    
  }
  
  guardarCliente()
  {
    delete this.cliente.id;
    console.log(this.cliente);
     this.apiService.agregarCliente(this.cliente).subscribe
     (
       res => {
         console.log(res);
         this.router.navigate(['/cliente']);
       },
       err => console.error(err) 
      
     )
  }

  actualizarCliente()
  {
    delete this.cliente.fecha_contratacion;
    delete this.cliente.created_at;
    delete this.cliente.created_by;
    console.log(this.cliente);
  }

  
}
