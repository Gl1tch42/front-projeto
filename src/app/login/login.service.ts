import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly URL = 'https://sistemaescolaapi.azurewebsites.net/api/';

  constructor(private httpCliente: HttpClient,) { }

  loginAluno(matricula): Observable<any> {
    return this.httpCliente.post<any>(this.URL + "auth/LoginAluno", { matricula });
  }

  loginProfessor(matricula): Observable<any> {
    return this.httpCliente.post<any>(this.URL + "auth/loginProfessor", { matricula });
  }

  loginSecretaria(matricula): Observable<any> {
    return this.httpCliente.post<any>(this.URL + "auth/loginSecretaria", { matricula });
  }

  logout(): Observable<any> {
    return this.httpCliente.post<any>(this.URL + "auth/loginSecretaria", {  });
  }

}
