import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly URL = 'http://localhost:5000/api/';

  constructor(private httpCliente: HttpClient,) { }

  login(matricula, categoria) {

  }

}
