import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { IGasto } from '../interfaces/gasto/gasto.interface';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  url:string = "http://localhost:8080/gasto";
  
  constructor(private http:HttpClient) { }

  public getGasto():Observable<IGasto>{

    return this.http.get<IGasto>(this.url + "/api/obtener")
  }

  public addSpent(obj:any):Observable<any>{

    return this.http.post(this.url + "/api/insertar", obj)
  }

}
