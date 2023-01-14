import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url="http://localhost:8080/educacion/";
  constructor(private http:HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url + 'ver');
  }

  public detail(id: number):Observable<Educacion>{
    return this.http.get<Educacion>(this.url + 'ver/'+ id);
  }

  public save(Educaciones: Educacion):Observable<any>{
    return this.http.post<any>(this.url + 'crear', Educaciones);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.url + 'delete/'+ id);
  }

}
