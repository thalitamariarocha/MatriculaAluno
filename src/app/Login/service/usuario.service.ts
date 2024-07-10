import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
    private apiUrl = 'http://localhost:3000/usuario'; // URL do backend


    constructor(private http: HttpClient) { }

  cadastarUsuario(usuario: { nome: string; cpf: string; senha: string; perfil: string}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cadastrarusuario`, usuario);
  }
  listarUsuario(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/listarusuario`);
  }
  deletarUsuario(id_usuario: number): Observable<any> {
   
    return this.http.delete<any>(`${this.apiUrl}/deletarusuario/${id_usuario}`);

  }
  editarUsuario(usuario: { id_usuario: number; nome: string; cpf: string; senha: string; perfil: string}, id_usuario: number,): Observable<any> {
    return this.http.put<Usuario>(`${this.apiUrl}/editarusuario/${id_usuario}`, usuario);
  }
  getUsuarioById(id_usuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/carregarusuario/${id_usuario}`);
  }
  

}