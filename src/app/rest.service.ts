import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Colleges } from './colleges';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  url:string="../assets/data/mydata.json";

  getColleges(): Observable<Colleges[]>{
    return this.http.get<Colleges[]>(this.url);
  }
}
