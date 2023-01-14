
import { Component, OnInit, Input, Output } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})

export class ExperienciaYEducacionComponent implements OnInit{
  educacionList:any;

  Educaciones: Educacion[] = []
  experiencias: Experiencia[] = [];
  EditarEducacion = 1;
  Editar = 1;
  boton: boolean = false
  constructor(private datosPorfolio:PorfolioService, private datos:ExperienciaService, private datosEducacion:EducacionService, private usuario:AutenticacionService) {}

  ngOnInit(): void {
    this.cargarExperiencias();
    this.cargarEducacion();
    this.boton = this.usuario.admin
    console.log(this.boton);
  }

  cargarEducacion():void{
    this.datosEducacion.lista().subscribe(data =>{
      console.log(data);
      this.Educaciones=data
    })
  }

  borrarEducacion(id:number){
    this.datosEducacion.delete(id).subscribe(data =>{
      this.cargarEducacion();
    }, err =>{
      alert("error");
    });
  }

  cargarExperiencias():void{
    this.datos.lista().subscribe(data =>{
      console.log(data);
      this.experiencias=data;
    });
  }

  borrar(id:number){
    this.datos.delete(id).subscribe(data =>{
      this.cargarExperiencias();
    }, err =>{
      alert("error");
    });
  }

  editar(id:number) {
    this.Editar = id;
  }

  editarEducacion(id:number) {
    this.EditarEducacion = id;
  }

}
