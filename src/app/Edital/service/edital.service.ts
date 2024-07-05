import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Edital } from '../model/edital.model';

@Injectable({
  providedIn: 'root'
})

export class EditalService {
    private apiUrl = 'http://localhost:3000/edital'; // URL do backend


    constructor(private http: HttpClient) { }

  cadastarEdital(edital: { numero: number; ano: number; descricao: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cadastraredital`, edital);
  }
  listarEdital(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/listaredital`);
  }
  deletarEdital(id_edital: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deletaredital/${id_edital}`);
  }
  editarEdital(edital: { id_edital: number; numero: number; ano: number; descricao: string }, id_edital: number): Observable<any> {
    return this.http.put<Edital>(`${this.apiUrl}/editaredital/${id_edital}`, edital);
  }
  getEditalById(id_edital: number): Observable<Edital> {
    return this.http.get<Edital>(`${this.apiUrl}/carregaredital/${id_edital}`);
  }
  

}