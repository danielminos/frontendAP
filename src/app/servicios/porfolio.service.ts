import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  url:string="https://backenddanielminos.herokuapp.com/"
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{    
    //return this.http.get("./assets/data/data.json");
    return this.http.get<any>(this.url+"ver/persona");
  }

  obtenerEducacion():Observable<any>{
    //return this.http.get("./assets/data/educacion.json");
    return this.http.get<any>(this.url+"ver/educacion");
  }

  obtenerExperiencia():Observable<any>{
    //return this.http.get("./assets/data/experiencia.json");
    return this.http.get<any>(this.url+"ver/experiencia");
  }

}
