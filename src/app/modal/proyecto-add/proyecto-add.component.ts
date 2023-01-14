import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyecto-add',
  templateUrl: './proyecto-add.component.html',
  styleUrls: ['./proyecto-add.component.css']
})
export class ProyectoAddComponent  implements OnInit{

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private data:ProyectosService, private ruta:Router) {

    this.form = this.formBuilder.group({
      nombre:['',[Validators.required]],
      info:['',[Validators.required]],
    })
  }
  ngOnInit(): void {
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get Info() {
    return this.form.get("info");
  }


  noEnviar(event:Event) {
    ///const datos = new (this.Nombre, this.Lugar, this.Jornada, this.Inicio, this.Fin, this.UrlImagen)
    this.data.save(this.form.value).subscribe(data=>{
      location.reload()
    }, err =>{
      alert("error");
    });
  }
}
