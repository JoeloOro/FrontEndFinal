import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectodit',
  templateUrl: './proyectodit.component.html',
  styleUrls: ['./proyectodit.component.css']
})
export class ProyectoditComponent implements OnInit{

  form: FormGroup;
  expEdit : Proyectos;
  edit : number
  @Input() entradaEdu = 1;


  constructor(private formBuilder: FormBuilder, private datos:ProyectosService, private ruta:Router) {
    this.form = this.formBuilder.group({
      id:[''],
      nombre:[''],
      info:[''],
    })

    interval(500).subscribe(n =>

      this.cargaIf())}
  ngOnInit(): void {
    this.carga();
    if (this.edit != this.entradaEdu) {

    }
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

  get Info() {
    return this.form.get("info");
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
