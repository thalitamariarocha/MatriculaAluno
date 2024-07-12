import { Component, OnInit } from '@angular/core';
import { PlanilhaService } from '../../service/planilha.service';
import { Edital } from 'src/app/Edital/model/edital.model';

@Component({
  selector: 'app-form-planilha',
  templateUrl: './form-planilha.component.html',
  styleUrls: ['./form-planilha.component.css']
})
export class FormPlanilhaComponent implements OnInit {
  onSubmit() {
    throw new Error('Method not implemented.');
  }

  item!: Edital;

  opcoes: Edital[] = [];

  constructor(private planilhaService: PlanilhaService) { }

  ngOnInit(): void {

    this.planilhaService.opcoesEdital().subscribe((data) => {
      this.opcoes = data;

    },

      (error) => {
        console.log(error);
      }
    );



  }

}
