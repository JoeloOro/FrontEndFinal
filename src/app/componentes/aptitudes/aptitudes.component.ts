
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { SkillService } from 'src/app/servicios/skill.service';


@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit{

  educacionList:any;

  Skills: Skill[] = []
  EditarSki = 1;
  boton: boolean = false

  constructor(private datos:SkillService, private uruario:AutenticacionService){}

  ngOnInit(): void {
    this.cargarProyectos()
    this.boton = this.uruario.admin
  }

  cargarProyectos():void{
    this.datos.lista().subscribe(data =>{
      console.log(data);
      this.Skills=data;
    });
  }

  borrarSkill(id:number){
    this.datos.delete(id).subscribe(data =>{
      this.cargarProyectos();
    }, err =>{
      alert("error");
    });
  }

  EditarSkill(id:number) {
    this.EditarSki = id;
  }

}


