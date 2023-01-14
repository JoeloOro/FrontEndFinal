import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url="http://localhost:8080/skill/";
  constructor(private http:HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url + 'ver');
  }

  public detail(id: number):Observable<Skill>{
    return this.http.get<Skill>(this.url + 'ver/'+ id);
  }

  public save(Skills: Skill):Observable<any>{
    return this.http.post<any>(this.url + 'crear', Skills);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.url + 'delete/'+ id);
  }

}
