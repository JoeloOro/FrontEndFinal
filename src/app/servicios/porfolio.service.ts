import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Encabezado } from '../model/encabezado';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  url="http://localhost:8080/";
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url + 'ver/perfil');
  }

  public save(Experiencias: Encabezado):Observable<any>{
    return this.http.post<any>(this.url + 'persona/crear', Experiencias);
  }

}
