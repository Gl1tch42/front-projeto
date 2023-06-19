import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/auth/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class VizualizarAulasAlunoService {
  readonly URL = 'https://sistemaescolaapi.azurewebsites.net/api/';

  constructor(private httpCliente: HttpClient, private localstorageService: LocalstorageService) { }

  getAulasAluno(): Observable<any> {
    return this.httpCliente.post<any>(this.URL + "aluno/getAulasAluno",
    { 
      idAluno: this.localstorageService.getUser().id_aluno
    });
  }

}
