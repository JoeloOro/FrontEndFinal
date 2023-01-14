import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { AppRoutingModule } from './app-routing.module';

import { ExperienciaAddComponent } from './modal/experiencia-add/experiencia-add.component';
import { ExperienciaEditComponent } from './modal/experiencia-edit/experiencia-edit.component';
import { EncabezadoEditComponent } from './modal/encabezado-edit/encabezado-edit.component';
import { EducacionEditComponent } from './modal/educacion-edit/educacion-edit.component';
import { EducacionAddComponent } from './modal/educacion-add/educacion-add.component';
import { ProyectoAddComponent } from './modal/proyecto-add/proyecto-add.component';
import { ProyectoditComponent } from './modal/proyectodit/proyectodit.component';
import { SkillEditComponent } from './modal/skill-edit/skill-edit.component';
import { SkillAddComponent } from './modal/skill-add/skill-add.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    AptitudesComponent,
    LogrosComponent,
    IniciarSesionComponent,
    PorfolioComponent,

    ExperienciaAddComponent,
    ExperienciaEditComponent,
    EncabezadoEditComponent,
    EducacionEditComponent,
    EducacionAddComponent,
    ProyectoAddComponent,
    ProyectoditComponent,
    SkillEditComponent,
    SkillAddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
