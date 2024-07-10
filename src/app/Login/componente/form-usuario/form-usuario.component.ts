import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Login/service/usuario.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent  {
  
  

  nome!: string;
  cpf!: string;
  senha!: string;
  perfil!: string;
  id_usuario!: number;
  message!: string;

  editMode = false; 

  
  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute,) { }


  ngOnInit(): void {
    this.id_usuario = this.route.snapshot.params['id_usuario'];
    
    if (this.id_usuario) {

      this.editMode = true;
      this.usuarioService.getUsuarioById(this.id_usuario).subscribe(data => {
        this.nome = data.nome;
        this.cpf = data.cpf;
        this.senha = data.senha;
        this.perfil = data.perfil;
      });
    }
  }

  onSubmit(): void {

    const selectedProfile = this.perfil;
    
    if (this.editMode) {
      this.usuarioService.editarUsuario({ id_usuario: this.id_usuario, nome: this.nome, cpf: this.cpf, senha: this.senha, perfil: selectedProfile}, this.id_usuario).subscribe(() => {
        this.message = 'usuário alterado com sucesso!';
        setTimeout(() => {
          this.message = '';
          this.router.navigate(['/home/listarUsuario']);
        }, 2000);
      });
    } else {
      this.usuarioService.cadastarUsuario({ nome: this.nome, cpf: this.cpf, senha: this.senha, perfil: selectedProfile }).subscribe((response: { id: any; }) => {
        if (response.id) {
          this.message = 'usuário salvo com sucesso!';
          setTimeout(() => {
            this.message = '';
            this.router.navigate(['/home/listarUsuario']);
          }, 2000);
        }
      });
    }
  }

}
