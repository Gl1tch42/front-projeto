import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/auth/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class SecretariaService {
  readonly URL = 'http://localhost:5000/api/';
  constructor(private httpCliente: HttpClient, private localstorageService: LocalstorageService) { }

  //Aluno
  buscarAluno(): Observable<any> {
    return this.httpCliente.get<any>(URL+'aluno/BuscarAlunos');
  }

  //controle

  addAluno(aluno): Observable<any> {
    return this.httpCliente.post<any>(URL+'aluno/InserirAluno', {aluno:aluno});
  }

  editarAluno(aluno): Observable<any> {
    return this.httpCliente.post<any>(URL+'aluno/UpdateAluno',{ aluno: aluno });
  }

  excluirAluno(id): Observable<any> {
    return this.httpCliente.post<any>(URL+'aluno/DeletarAluno', { id: id });
  }
  //

  //professor
  //controle
  //
}
