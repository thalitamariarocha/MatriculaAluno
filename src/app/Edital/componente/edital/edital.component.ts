//import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EditalService } from 'src/app/Edital/service/edital.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Edital } from '../../model/edital.model';
//import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-edital',
  templateUrl: './edital.component.html',
  styleUrls: ['./edital.component.css']
})

export class EditalComponent {

  // edital: any = {
  //   numero: '',
  //   ano: null,
  //   descricao: ''
  // };

  
  
  numero!: number;
  ano!: number;
  descricao!: string;
  qtdVagas!: number;
  message!: string;



  editMode = false; //????
  id_edital!: number  //????

  constructor(private editalService: EditalService, private router: Router, private route: ActivatedRoute,) { }

  //?????
  ngOnInit(): void {
    this.id_edital = this.route.snapshot.params['id'];
    
    if (this.id_edital) {
      this.editMode = true;
      this.editalService.getEditalById(this.id_edital).subscribe(data => {
        this.numero = Number(data.numero);
        this.ano = Number(data.ano);
        this.descricao = data.descricao;
        this.qtdVagas = Number(data.qtdVagas);
      });
    }
  }

  onSubmit(): void {
    if (this.editMode) {
      this.editalService.editarEdital({ id_edital: this.id_edital, numero: this.numero, ano: this.ano, descricao: this.descricao }, this.id_edital).subscribe(() => {
        this.message = 'Edital alterado com sucesso!';
        setTimeout(() => {
          this.message = '';
          this.router.navigate(['/listarEdital']);
        }, 2000);
      });
    } else {
      this.editalService.cadastarEdital({ numero: this.numero, ano: this.ano, descricao: this.descricao }).subscribe((response: { id: any; }) => {
        if (response.id) {
          this.message = 'Edital salvo com sucesso!';
          setTimeout(() => {
            this.message = '';
            this.router.navigate(['/listarEdital']);
          }, 2000);
        }
      });
    }
  }

    // onSubmit(): void {
    //   if (!this.numero || !this.ano || !this.descricao || !this.qtdVagas) {
    //     this.message = 'Todos os campos são obrigatórios.';
    //     setTimeout(() => {
    //       this.message = '';
    //     }, 2000);
    //     return;
    //   }

    //   const edital = {
    //     numero: this.numero,
    //     ano: this.ano,
    //     descricao: this.descricao,
    //     qtdVagas: this.qtdVagas
    //   };

    //   this.editalService.cadastarEdital(edital).subscribe((response: { id: any; }) => {
    //     if (response.id) {
    //       this.message = 'Edital salvo com sucesso!';
    //       setTimeout(() => {
    //         this.message = '';
    //         this.router.navigate(['']);
    //       }, 2000);
    //       // Opcional: redirecionar para outra página


    //     } else {
    //       console.error('Erro ao salvar o edital:', console.error);
    //       this.message = 'Erro: ' + console.error;
    //     }
    //   });
    // }
  }