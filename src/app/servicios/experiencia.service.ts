import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { ExperienciaEdit } from '../model/experiencia-edit';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url="https://backendfinal.onrender.com/experiencia/";
  constructor(private http:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url + 'ver');
  }

  public detail(id: number):Observable<ExperienciaEdit>{
    return this.http.get<ExperienciaEdit>(this.url + 'ver/'+ id);
  }

  public save(Experiencias: Experiencia):Observable<any>{
    return this.http.post<any>(this.url + 'crear', Experiencias);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.url + 'delete/'+ id);
  }
}
