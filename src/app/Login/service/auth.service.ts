import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuario';
  private user: { role: string } | null = null;

  constructor(private http: HttpClient, router: Router) {}

  login(credentials: { cpf: string; senha: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/validarUsuario`, credentials).pipe(
      map((response: any) => {
        // Salvar token ou informações de usuário, se necessário
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('tipo', response.tipo);
          
        }
        return response;
      })
    );
  }



  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('tipo');
  }



  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
