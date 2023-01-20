import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  miPorfolio:any;
  boton: boolean = false
  constructor(private datosPorfolio:PorfolioService, private uruario:AutenticacionService, private ruta:Router) {

  }
  ngOnInit(): void {
    this.boton = this.uruario.admin
    console.log(this.boton)
    this.cargarProyectos()

  }

  cargarProyectos():void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.miPorfolio=data;
    });
  }

  abrirIniciarSesion() {
    this.ruta.navigate(['/iniciar-sesion'])
  }
  salirSesion() {
    this.uruario.AdminFalse
    this.ruta.navigate([''])
  }

}
