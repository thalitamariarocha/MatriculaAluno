import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AvaliadorGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('tipo');
    if (this.authService.isAuthenticated() && role === 'Avaliador') {
      return true;
    }
    alert('Acesso negado, você não é um Avaliador');
    //this.router.navigate(['/login']);
    return false;
  }
}
