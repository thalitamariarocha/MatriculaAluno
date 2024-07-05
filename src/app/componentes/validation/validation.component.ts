import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  cpf!: string;
  message!: string; 


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }


  //logica para redirecionar tela (validacao de cpf foi feita no back-end)
  validarCpf(): void {
   
    this.apiService.validarCpf(this.cpf).subscribe(response => {
      if (response.valid) {
        this.router.navigate(['/forms']);
      } else {
        this.message = 'CPF inválido. Por favor, insira um CPF com 11 números.';
      }
    });
  }




}
