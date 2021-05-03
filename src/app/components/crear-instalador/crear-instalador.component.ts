import { Component, OnInit } from '@angular/core';
import { Instalador } from '../../modelo/Instalador';
import { ApiService } from '../../servicio/api.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-crear-instalador',
  templateUrl: './crear-instalador.component.html',
  styleUrls: ['./crear-instalador.component.css']
})
export class CrearInstaladorComponent implements OnInit {

  instalador : Instalador =
  {
    id : '',
    nombre_completo : '',
    tipo_trabajador : '',
    telefono : '',
    direccion : '',
    created_by : '',
    created_at : '',
    updated_by : '',
    updated_at : ''
  }

  constructor(private apiService: ApiService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {}



  guardarInstalador()
  {
    delete this.instalador.id;
    delete this.instalador.updated_at;
    delete this.instalador.updated_by;
    console.log(this.instalador);
    this.apiService.agregarInstalador(this.instalador).subscribe
    (
      res => 
      {
        console.log(res);
        this.router.navigate(['/instalador']);
      },
      err => console.error(err)
    )
  }
  
}
