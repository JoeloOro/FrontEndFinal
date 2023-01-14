import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent implements OnInit{

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private data:SkillService, private ruta:Router) {

    this.form = this.formBuilder.group({
      nombre:['',[Validators.required]],
      porcentaje:['',[Validators.required]],
    })
  }
  ngOnInit(): void {
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get Porcentaje() {
    return this.form.get("porcentaje");
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


