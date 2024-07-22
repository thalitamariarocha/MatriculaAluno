import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanilhaService } from '../../service/planilha.service';
import { SharedService } from 'src/app/shared.service';
import { Aluno } from '../../model/aluno.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.css']
})
export class EnviarEmailComponent implements OnInit {

  aluno!: Aluno;
  alunos: Aluno[] = [];


  constructor(private planilhaService: PlanilhaService, private http: HttpClient, private sharedService: SharedService, private route: ActivatedRoute) { }

  selectedEdital: string | null = null;

  ngOnInit(): void {

    this.selectedEdital = this.route.snapshot.paramMap.get('id_edital');

    console.log('Edital selecionado:', this.selectedEdital);

    if (this.selectedEdital) {
      this.planilhaService.getAlunosByEdital(this.selectedEdital).subscribe(
        (data) => {
          this.alunos = data;
          this.sendEmails();
        },
        (error) => {
          console.error('Erro ao buscar alunos:', error);
        }
      );

    }

  }

  sendEmails(): void {
    this.alunos.forEach(aluno => {
      debugger;
      const to = aluno.email;
      const subject = 'Matrícula Aberta - Bem Vindo!';
      const text = `Parabéns! Você foi aprovado no IFMT. Para realizar a matrícula, clique no link e complete seus dados: http://localhost:4200/acessoAluno`;

      this.planilhaService.sendEmail(to, subject, text).subscribe(
        (response) => {
          console.log('E-mail enviado:', response);
        },
        (error) => {
          console.error('Erro ao enviar e-mail:', error);
        }
      );
    });
  }
}

