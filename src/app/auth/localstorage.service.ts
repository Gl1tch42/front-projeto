import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'user';

  constructor() { }

  // Salva o token no local storage
  public saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Obtém o token do local storage
  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Remove o token do local storage
  public removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Salva as características do usuário no local storage
  public saveUser(user: any): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  // Obtém as características do usuário do local storage
  public getUser(): any {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  // Remove as características do usuário do local storage
  public removeUser(): void {
    localStorage.removeItem(this.USER_KEY);
  }
}