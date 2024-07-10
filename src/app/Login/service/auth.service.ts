import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuario';

  constructor(private http: HttpClient) {}

  login(credentials: { cpf: string; senha: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/validarUsuario`, credentials).pipe(
      map((response: any) => {
        // Salvar token ou informações de usuário, se necessário
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
        return response;
      })
    );
  }



  logout(): void {
    localStorage.removeItem('token');


  }



  isAuthenticated(): boolean {
   
    return !!localStorage.getItem('token');
    
  }
}
