
import { Component, OnInit } from '@angular/core';
import { MatriculaService } from 'src/app/Avaliador/service/matricula.service';
import { Router } from '@angular/router';
//import { error } from 'console';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PlanilhaService } from 'src/app/planilha/service/planilha.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-avaliar-matricula',
  templateUrl: './avaliar-matricula.component.html',
  styleUrls: ['./avaliar-matricula.component.css']
})
export class AvaliarMatriculaComponent implements OnInit {

  nome!: string;
  telefone!: string;
  email!: string;
  rg!: string;
  cpf!: string;
  endereco!: string;
  id_aluno!: number;
  documentoUrl!: SafeResourceUrl;
  documento!: File;
  mensagem = "Informamos que consta pendência em sua matrícula, " +
    " entre no link http://localhost:4200/acessoAluno verifique se todos os documentos foram enviados corretamente e se " +
    "foi preenchido conforme documentação. " + " Caso tenha dúvidas, entre em contato conosco.";

  mensagemAprovacao = "Parabéns! sua documentação foi avaliada e informamos que sua matrícula já está finalizada no IFMT.";

  alunos: any[] = [];
  aluno!: any;

  constructor(private planilhaService: PlanilhaService, private sanitizer: DomSanitizer, private matriculaService: MatriculaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_aluno = this.route.snapshot.params['id_aluno'];
    this.matriculaService.getAlunoById(this.id_aluno).subscribe(data => {
      this.nome = data.nome;
      this.telefone = data.telefone;
      this.email = data.email;
      this.rg = data.rg;
      this.cpf = data.cpf;
      this.endereco = data.endereco;
      // this.documentoUrl = data.documento;

    });
    this.matriculaService.getDocumento(this.id_aluno).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      this.documentoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      // url => {
      // this.documentoUrl = url;
      // console.log(this.documentoUrl);
    }
    );

  }

  aprovarAluno(id_aluno: number): void {
    this.matriculaService.aprovarAluno(this.id_aluno).subscribe(() => {
      alert('Aluno aprovado com sucesso!');
      this.planilhaService.sendEmail(this.email, 'Matrícula Aprovada - IFMT', this.mensagemAprovacao).subscribe({
        next: () => {
          alert('E-mail enviado com sucesso!');
          this.router.navigate(['/home/listarMatricula']);
        },
        error: (err) => {
          alert("Erro ao enviar e-mail para " + this.email + ':' + err);
        }
      });
      
      //this.router.navigate(['/home/listarMatricula']);
    }
    );
  }

  reprovarAluno(id_aluno: number): void {
    this.matriculaService.reprovarAluno(this.id_aluno).subscribe(() => {
      alert('Aluno reprovado, enviaremos um e-mail informando a pendência!');
      this.planilhaService.sendEmail(this.email, 'Reprovação na análise da Matrícula', this.mensagem).subscribe({
        next: () => {
          alert('E-mail enviado com sucesso!');
          this.router.navigate(['/home/listarMatricula']);
        },
        error: (err) => {
          alert("Erro ao enviar e-mail para " + this.email + ':' + err);
        }
      });
      // this.router.navigate(['/home/listarMatricula']);
    }
    );
  }



}
