import { Text } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Observable, timer} from 'rxjs';
import { ExperienciaYEducacionComponent } from 'src/app/componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaEdit } from 'src/app/model/experiencia-edit';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent  implements OnInit{

  form: FormGroup;
  expEdit : ExperienciaEdit;
  edit : number
  @Input() entrada = 1;


  constructor(private formBuilder: FormBuilder, private datos:ExperienciaService, private ruta:Router) {
    this.form = this.formBuilder.group({
      id:[''],
      nombre:[''],
      lugar:[''],
      jornada:[''],
      inicio:[''],
      fin:[''],
      ubicacion:[''],
      urlImagen:[''],
    })

    interval(500).subscribe(n =>

      this.cargaIf())}
  ngOnInit(): void {
    this.carga();
    if (this.edit != this.entrada) {

    }
  }

  cargaIf(){
    if (this.edit != this.entrada) {
      this.carga();
      this.edit = this.entrada;
    }
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

  get Ubicacion() {
    return this.form.get("ubicacion");
  }

  get UrlImagen() {
    return this.form.get("urlImagen");
  }




  noEnviar(event:Event) {

    this.datos.save(this.form.value).subscribe(data=>{
      window.location.reload()
    }, err =>{
      alert("error");
    });
  }







  carga():void{
    this.datos.detail(this.entrada).subscribe(data =>{
      this.expEdit=data;
    });
  }






}
