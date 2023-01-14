import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { Encabezado } from 'src/app/model/encabezado';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado-edit',
  templateUrl: './encabezado-edit.component.html',
  styleUrls: ['./encabezado-edit.component.css']
})
export class EncabezadoEditComponent implements OnInit{

  form: FormGroup;
  expEdit : Encabezado;


  constructor(private formBuilder: FormBuilder, private datos:PorfolioService, private ruta:Router) {
    this.form = this.formBuilder.group({
      id:[''],
      nombre:[''],
      posicion:[''],
      urlImagen:[''],
      ubicacion:[''],
      acercaDe:[''],
      email:[''],
      password:[''],
    })


  }
  ngOnInit(): void {
    this.carga();
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get Posicion() {
    return this.form.get("posicion");
  }

  get UrlImagen() {
    return this.form.get("urlImagen");
  }

  get AcercaDe() {
    return this.form.get("acercaDe");
  }

  get Ubicacion() {
    return this.form.get("ubicacion");
  }

  get Email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("email");
  }




  noEnviar(event:Event) {

    this.datos.save(this.form.value).subscribe(data=>{
      location.reload()
    }, err =>{
      alert("error");
    });
  }





  carga():void{
    this.datos.obtenerDatos().subscribe(data =>{
      this.expEdit=data;
      console.log(data);

    });
  }






}
