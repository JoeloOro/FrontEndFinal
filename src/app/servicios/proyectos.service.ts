import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url="https://backendfinal.onrender.com/proyecto/";
  constructor(private http:HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.url + 'ver');
  }

  public detail(id: number):Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url + 'ver/'+ id);
  }

  public save(Proyecto: Proyectos):Observable<any>{
    return this.http.post<any>(this.url + 'crear', Proyecto);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.url + 'delete/'+ id);
  }

}
