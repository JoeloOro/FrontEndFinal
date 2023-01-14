
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';


@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})

export class LogrosComponent implements OnInit{

  educacionList:any;
  boton: boolean = false
  Proyectos: Proyectos[] = []
  EditarPro = 1;

  constructor(private datos:ProyectosService, private uruario:AutenticacionService){}

  ngOnInit(): void {
    this.cargarProyectos();
    this.boton = this.uruario.admin;
  }

  cargarProyectos():void{
    this.datos.lista().subscribe(data =>{
      console.log(data);
      this.Proyectos=data;
    });
  }

  borrarProyectos(id:number){
    this.datos.delete(id).subscribe(data =>{
      this.cargarProyectos();
    }, err =>{
      alert("error");
    });
  }

  editarProyectos(id:number) {
    this.EditarPro = id;
  }


}
