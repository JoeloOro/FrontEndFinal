import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion-add',
  templateUrl: './educacion-add.component.html',
  styleUrls: ['./educacion-add.component.css']
})
export class EducacionAddComponent implements OnInit{

  form: FormGroup;
  /*nombre: '';
  lugar: '';
  jornada: '';
  inicio: '';
  fin: '';
  domicilio: '';
  urlImagen: '';*/
  constructor(private formBuilder: FormBuilder, private data:EducacionService, private ruta:Router) {

    this.form = this.formBuilder.group({
      nombre:['',[Validators.required]],
      titulo:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
      urlImagen:['',[Validators.required]],
    })
  }
  ngOnInit(): void {
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get Titulo() {
    return this.form.get("titulo");
  }

  get Inicio() {
    return this.form.get("inicio");
  }

  get Fin() {
    return this.form.get("fin");
  }

  get UrlImagen() {
    return this.form.get("urlImagen");
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
