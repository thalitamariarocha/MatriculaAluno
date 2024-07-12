import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PlanilhaService {
    private apiUrl = 'http://localhost:3000/edital'; // URL do backend


    constructor(private http: HttpClient) { }

  opcoesEdital(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/opcoesedital`);
  }

 
  

}