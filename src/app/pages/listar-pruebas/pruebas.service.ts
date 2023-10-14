import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
import { Prueba } from '../prueba/prueba';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {
  private apiUrl = environment.urlPruebas;


  constructor(private http: HttpClient) { }

  public getPruebas(): Observable<Prueba[]> {
    console.log(this.apiUrl)
    return this.http.get<Prueba[]>(this.apiUrl);
  }

}
