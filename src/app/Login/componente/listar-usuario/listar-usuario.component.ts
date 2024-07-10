import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../model/usuario.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuario!: Usuario;
  usuarios: Usuario[] = [];

  constructor( private router: Router, private route: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuario();
    this.route.params.subscribe(params => {
      const id_usuario = +params['id_usuario']; // O símbolo + converte a string para número
      if (id_usuario) {
        this.getUsuarioById(id_usuario);
      }
      else {
        this.listarUsuario();
      }
    });
  }

  listarUsuario(): void {
    this.usuarioService.listarUsuario().subscribe(data => {
      this.usuarios = data;
    });
  }

  editarUsuario(usuario: Usuario): void {
    this.router.navigate(['/home/usuario', usuario.id_usuario]);
  }

  deletarUsuario(id_usuario: number): void {
    console.log(id_usuario);
    this.usuarioService.deletarUsuario(id_usuario).subscribe(() => {
      this.listarUsuario();
    });
  }

  getUsuarioById(id_usuario: number): void {
    this.router.navigate([`/home/editarUsuario/${id_usuario}`]); 
  }


}

