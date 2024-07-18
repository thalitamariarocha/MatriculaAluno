import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required]
    });
    
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          
          alert('Falha na autenticação, verifique suas credenciais.');
        }
      });
    }
  }
  
  



  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe(
  //       (response) => {
  //         // Sucesso, redirecionar ou fazer algo
  //         this.router.navigate(['/']);
  //       },
  //       (error) => {
  //         // Tratar erro de login
  //         alert('Falha na autenticação, verifique suas credenciais.');
  //        // console.log('Erro no login', error);
  //       }
  //     );
  //   }
  // }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const { cpf, senha } = this.loginForm.value;
  //     this.authService.login(cpf, senha).subscribe(
  //       (success: any) => {
  //         if (success) {
  //           this.router.navigate(['/home']); // ou a rota que você quiser
  //         } else {
  //           alert('Erro no Login');
  //         }
  //       },
  //       (error: any) => {
  //         console.error('Erro no Login', error);
  //         alert('Ocorreu um erro no Login');
  //       }
  //     );
  //   }
  }


  

  


