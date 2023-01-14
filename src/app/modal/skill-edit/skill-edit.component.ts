import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit{

  form: FormGroup;
  expEdit : Skill;
  edit : number
  @Input() entradaSki = 1;


  constructor(private formBuilder: FormBuilder, private datos:SkillService, private ruta:Router) {
    this.form = this.formBuilder.group({
      id:[''],
      nombre:[''],
      porcentaje:[''],
    })

    interval(500).subscribe(n =>

      this.cargaIf())}
  ngOnInit(): void {
    this.carga();
    if (this.edit != this.entradaSki) {

    }
  }

  cargaIf(){
    if (this.edit != this.entradaSki) {
      this.carga();
      this.edit = this.entradaSki;
    }
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get Porcentaje() {
    return this.form.get("porcentaje");
  }



  noEnviar(event:Event) {

    this.datos.save(this.form.value).subscribe(data=>{
      location.reload()
    }, err =>{
      alert("error");
    });
  }







  carga():void{
    this.datos.detail(this.entradaSki).subscribe(data =>{
      this.expEdit=data;
    });
  }






}
