import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly URL = 'http://localhost:5000/api/';

  constructor(private httpCliente: HttpClient,) { }

  loginAluno(matricula): Observable<any> {
    return this.httpCliente.post<any>(this.URL + "auth/LoginAluno", { matricula });
  }

}
