import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/hello`);
  }

  validarCpf(cpf: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validar-cpf`, { cpf });
  }

 

}
