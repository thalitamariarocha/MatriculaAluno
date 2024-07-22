import { Component, OnInit } from '@angular/core';
import { PlanilhaService } from '../../service/planilha.service';
import { Edital } from 'src/app/Edital/model/edital.model';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-planilha',
  templateUrl: './form-planilha.component.html',
  styleUrls: ['./form-planilha.component.css']
})
export class FormPlanilhaComponent implements OnInit {

  selectedEdital!: string;
  quantidadeVagas: number = 0;
  file: File | null = null;

  item!: Edital;
  opcoes: Edital[] = [];

  constructor(private planilhaService: PlanilhaService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.planilhaService.opcoesEdital().subscribe((data) => {
      this.opcoes = data;

    },
      (error) => {
        console.log(error);
      }
    );
  }

  onFileChange(event: any): void {
    this.file = event.target.files[0];
  }

  onSubmit(): void {

    if (!this.file) {
      alert('Selecione um arquivo');
      return;
    }


    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('edital', this.selectedEdital);
    formData.append('vagas', this.quantidadeVagas.toString());


    setTimeout(() => {

      this.planilhaService.importarAlunos(formData).subscribe(
        (response) => {
          console.log(response);
          alert('Planilha cadastrada com sucesso');
          this.router.navigate(['home/enviaremail', this.selectedEdital]);
        },
        (error) => {
          console.log(error);
          alert('Erro ao cadastrar planilha');
        }
      );

    }, 4000);

  }

 


}
