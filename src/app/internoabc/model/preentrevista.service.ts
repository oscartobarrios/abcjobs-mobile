import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import  {PreEntrevista} from './preentrevista';

@Injectable({
  providedIn: 'root'
})
export class PreentrevistaService {
  private apiUrl = environment.urlPreentrevista;
  constructor(private http: HttpClient) { }
  public getEntrevistas(): Observable<PreEntrevista[]> {
    console.log(this.apiUrl)
    return this.http.get<PreEntrevista[]>(this.apiUrl);
  }

}
