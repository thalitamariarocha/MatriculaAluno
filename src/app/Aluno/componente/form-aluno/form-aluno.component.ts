import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/Aluno/service/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../model/aluno.model';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent {

  nome: string = '';
  email: string = '';
  cpf: string = '';
  dt_Nascimento: string = '';
  telefone: string = '';
  rg: string = '';
  endereco: string  = '';
  message: string = '';
  file: File | null = null;

  editMode = false; //????
  id_aluno!: number;  //????

  constructor(private alunoService: AlunoService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id_aluno = this.route.snapshot.params['id_aluno'];
    
    if (this.id_aluno) {
      this.editMode = true;
      this.alunoService.getAlunoById(this.id_aluno).subscribe(data => {
        this.nome = data.nome;
        this.email = data.email;
        this.cpf = data.cpf;
        this.dt_Nascimento = data.dt_Nascimento;
        this.telefone = data.telefone;
        this.rg = data.rg;
        this.endereco = data.endereco;
      });
    }
  }

  onFileChange(event: any): void {
    this.file = event.target.files[0];
  }

  onSubmit(): void {
    if(this.nome === '' || this.email === '' || this.cpf === '' || this.dt_Nascimento === '' || this.telefone === '' || this.rg === '' || this.endereco === '') {
      alert('Preencha todos os campos');
      return;
    }
    
    if (this.file) {
      const formData = new FormData();
      formData.append('comprovante', this.file);
      formData.append('alunoId', this.id_aluno.toString());
      formData.append('nome', this.nome);
      formData.append('cpf', this.cpf);
      formData.append('telefone', this.telefone);
      formData.append('email', this.email);
      formData.append('rg', this.rg);
      formData.append('endereco', this.endereco);
      formData.append('dt_Nascimento', this.dt_Nascimento);

      this.alunoService.atualizarAluno(formData).subscribe(
        (response) => {
          console.log(response);
          alert('Aluno atualizado com sucesso, feche a janela e aguarde a aprovação');
          this.router.navigate(['/acessoAluno']);
        },
        (error) => {
          console.log(error);
          alert('Erro ao atualizar aluno');
        }
      );
    } else {
      console.error('Nenhum arquivo selecionado');
    }
  }
}


