import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PlanilhaService {
    private apiUrl = 'http://localhost:3000/edital'; // URL do backend
    private apiUrl2 = 'http://localhost:3000/aluno'; // URL do backend
   
    constructor(private http: HttpClient) { }

  opcoesEdital(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/opcoesedital`);
  }

  importarAlunos(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl2}/importaralunos`, formData);
  }

  getAlunosByEdital(edital: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl2}/getAlunosByEdital/${edital}`);
  }

  enviarEmail(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl2}/enviaremail`, formData);
  }
 
  sendEmail(to: string, subject: string, text: string): Observable<any> {
    const emailData = { to, subject, text };
    return this.http.post(`${this.apiUrl2}/sendEmail`, emailData);
  }

}