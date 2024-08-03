import { Component, OnInit } from '@angular/core';
import { MatriculaService } from 'src/app/Avaliador/service/matricula.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-matricula',
  templateUrl: './lista-matricula.component.html',
  styleUrls: ['./lista-matricula.component.css']
})
export class ListaMatriculaComponent implements OnInit {

  alunos: any[] = [];
  aluno!: any;

  constructor(private matriculaService: MatriculaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarAlunos();
    this.route.params.subscribe(params => {
      const id_aluno = +params['id_aluno'];
      if (id_aluno) {
        this.getAlunoById(id_aluno);
      }
      else {
        this.listarAlunos();
      }
    });

  }

  listarAlunos(): void {
    this.matriculaService.listarAluno().subscribe(data => {
      this.alunos = data;
    });
  }

  getAlunoById(id_aluno: number): void {
    this.router.navigate([`/home/avaliarMatricula/${id_aluno}`]);
  }


}
