import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-acesso-aluno',
  templateUrl: './acesso-aluno.component.html',
  styleUrls: ['./acesso-aluno.component.css']
})
export class AcessoAlunoComponent  {
  cpf!: number ;
  message: string = ''; 


  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit(): void {


  
  }


  OnSubmit(): void {
    this.alunoService.validarCpf(this.cpf).subscribe(response => {
      if (response.message === 'CPF não encontrado') {
        this.message = 'Verifique seu CPF.';
        
        //this.router.navigate(['/carregaraluno', this.cpf]);
      } else if (response.message === 'Erro ao buscar alunos') {
        this.message = 'Erro ao buscar alunos';
      }
      
      else {
        this.message = 'OK';
        const id_aluno = response.aluno;
        this.router.navigate(['/carregaraluno', id_aluno]);
      }
    });
  }

}
