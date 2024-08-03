import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
            const role = localStorage.getItem('tipo');
            if (this.authService.isAuthenticated() && role === 'Administrador') {
              return true;
            }
            alert('Acesso negado, você não é um Administrador');
            //this.router.navigate(['/login']);
            return false;
          
    }

}
