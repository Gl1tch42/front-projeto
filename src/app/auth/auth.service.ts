import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private router: Router,
    private localStorageService: LocalstorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.localStorageService.getToken();

    if (token) {
      // Usuário autenticado, permite o acesso à rota
      return true;
    }

    // Usuário não autenticado, redireciona para a página de login
    this.router.navigate(['/login']);
    return false;
  }

}
