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
  getAlunos(): Observable<any> {
    return this.httpCliente.get<any>(this.URL + 'aluno/BuscarAlunos');
  }

  //controle

  addAluno(aluno: any): Observable<any> {
    return this.httpCliente.post<any>(this.URL+'aluno/InserirAluno', {aluno:aluno});
  }

  editarAluno(aluno: any): Observable<any> {
    return this.httpCliente.post<any>(this.URL+'aluno/UpdateAluno',{ aluno: aluno });
  }

  excluirAluno(id): Observable<any> {
    return this.httpCliente.post<any>(this.URL+'aluno/DeletarAluno', { id: id });
  }
  //

  //professor
  //controle
  //

  //turma
  getTurmas(): Observable<any> {
    return this.httpCliente.get<any>(this.URL + 'turmas/BuscarTurmas');
  }

  //controle

  addTurmas(turma): Observable<any> {
    return this.httpCliente.post<any>(this.URL+'turmas/InserirTurma', { turma : turma });
  }

  editarTurmas(turma): Observable<any> {
    return this.httpCliente.post<any>(this.URL+'turmas/UpdateTurma',{ turma: turma });
  }

  excluirTurma(id): Observable<any> {
    return this.httpCliente.post<any>(this.URL+'turmas/DeletarTurma', { id: id });
  }
  //

  //disciplinas
  getDisciplinas(): Observable<any> {
    return this.httpCliente.get<any>(this.URL + 'disciplinas/BuscarDisciplinas');
  }
  //controle
  addDisciplinas(disciplinas): Observable<any> {
    return this.httpCliente.post<any>(this.URL+'disciplinas/InserirDisciplinas', { disciplina : disciplinas });
  }

  editarDisciplinas(disciplinas): Observable<any> {
    return this.httpCliente.post<any>(this.URL+'disciplinas/UpdateDisciplinas',{ disciplina: disciplinas });
  }

  excluirDisciplinas(id): Observable<any> {
    return this.httpCliente.post<any>(this.URL+'disciplinas/DeletarDisciplinas', { id: id });
  }
  //
}

interface Aluno {
  email: string;
  id_aluno: number;
  nm_aluno: string;
  endereco: string;
  telefone: string;
  id_turmas: number;
}
