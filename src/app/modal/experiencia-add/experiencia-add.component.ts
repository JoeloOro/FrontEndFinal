import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AptitudesComponent } from 'src/app/componentes/aptitudes/aptitudes.component';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-add',
  templateUrl: './experiencia-add.component.html',
  styleUrls: ['./experiencia-add.component.css']
})
export class ExperienciaAddComponent implements OnInit{

  form: FormGroup;
  /*nombre: '';
  lugar: '';
  jornada: '';
  inicio: '';
  fin: '';
  domicilio: '';
  urlImagen: '';*/
  constructor(private formBuilder: FormBuilder, private data:ExperienciaService, private ruta:Router) {

    this.form = this.formBuilder.group({
      nombre:['',[Validators.required]],
      lugar:['',[Validators.required]],
      jornada:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
      domicilio:['',[Validators.required]],
      urlImagen:['',[Validators.required]],
    })
  }
  ngOnInit(): void {
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get Lugar() {
    return this.form.get("lugar");
  }

  get Jornada() {
    return this.form.get("jornada");
  }

  get Inicio() {
    return this.form.get("inicio");
  }

  get Fin() {
    return this.form.get("fin");
  }

  get Domicilio() {
    return this.form.get("domicilio");
  }

  get UrlImagen() {
    return this.form.get("urlImagen");
  }


  noEnviar(event:Event) {
    ///const datos = new (this.Nombre, this.Lugar, this.Jornada, this.Inicio, this.Fin, this.UrlImagen)
    this.data.save(this.form.value).subscribe(data=>{
      window.location.reload()
    }, err =>{
      alert("error");
    });
  }


}
