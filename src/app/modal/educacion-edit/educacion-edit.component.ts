import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent  implements OnInit{

  form: FormGroup;
  expEdit : Educacion;
  edit : number
  @Input() entradaEdu = 1;


  constructor(private formBuilder: FormBuilder, private datos:EducacionService, private ruta:Router) {
    this.form = this.formBuilder.group({
      id:[''],
      nombre:[''],
      titulo:[''],
      inicio:[''],
      fin:[''],
      urlImagen:[''],
    })

    interval(500).subscribe(n =>

      this.cargaIf())}
  ngOnInit(): void {
    this.carga();
  }

  cargaIf(){
    if (this.edit != this.entradaEdu) {
      this.carga();
      this.edit = this.entradaEdu;
    }
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

    this.datos.save(this.form.value).subscribe(data=>{
      location.reload()
    }, err =>{
      alert("error");
    });
  }







  carga():void{
    this.datos.detail(this.entradaEdu).subscribe(data =>{
      this.expEdit=data;
    });
  }






}
