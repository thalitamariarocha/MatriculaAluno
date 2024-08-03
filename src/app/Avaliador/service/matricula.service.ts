import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from 'src/app/Aluno/model/aluno.model';

@Injectable({
    providedIn: 'root'
})

export class MatriculaService {
    private apiUrl = 'http://localhost:3000/avaliador'; // URL do backend

    constructor(private http: HttpClient) { }


    listarAluno(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/listarAluno`);
    }
    getAlunoById(id_aluno: number): Observable<Aluno> {
        return this.http.get<Aluno>(`${this.apiUrl}/avaliarMatricula/${id_aluno}`);
    }
    aprovarAluno(id_aluno: number): Observable<any> {
            let body = {
                id_aluno: id_aluno
            }

        return this.http.put<any>(`${this.apiUrl}/aprovarAluno/${id_aluno}`, id_aluno);
    }
    reprovarAluno(id_aluno: number): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/reprovarAluno/${id_aluno}`, id_aluno);
    }
    getDocumento(id_aluno: number): Observable<Blob> {
        //return this.http.get<any>(`${this.apiUrl}/getDocumento/${id_aluno}`);
        return this.http.get(`${this.apiUrl}/getDocumento/${id_aluno}`, { responseType: 'blob' });
    }


}
