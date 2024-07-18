import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from '../model/aluno.model';


@Injectable({
  providedIn: 'root'
})

export class AlunoService {

  private apiUrl = 'http://localhost:3000/aluno'; // URL do backend

  constructor(private http: HttpClient) { }

  // atualizarAluno(aluno: {
  //   id_aluno: number;
  //   nome: string;
  //   email: string;
  //   cpf: string;
  //   dt_Nascimento: string;
  //   telefone: string;
  //   rg: string;
  //   endereco: string;
  // }, id_aluno: number): Observable<any> {
  //   return this.http.put<Aluno>(`${this.apiUrl}/atualizaraluno/${id_aluno}`, aluno);
  // }

  atualizarAluno(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/atualizaraluno`, formData);
  }
  getAlunoById(id_aluno: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/carregaraluno/${id_aluno}`);
  }



}