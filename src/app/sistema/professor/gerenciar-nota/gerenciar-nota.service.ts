import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/auth/localstorage.service';

interface NotaSaved {
  nota: string;
  periodo: string;
  id_disciplina: number;
  id_professor: number;
  id_aluno: any;
}

@Injectable({
  providedIn: 'root'
})
export class GerenciarNotaService {

  readonly URL = 'https://sistemaescolaapi.azurewebsites.net/api/';

  constructor(private httpCliente: HttpClient, private localstorageService: LocalstorageService) { }

  buscarTumasDaAula(): Observable<any> {
    console.log(this.localstorageService.getUser().id_professor)
    return this.httpCliente.post<any>(this.URL + "professor/buscarTumasDaAula", { idProfessor: this.localstorageService.getUser().id_professor, idDiciplina: this.localstorageService.getUser().id_disciplina });
  }

  salvarNota(nota: NotaSaved): Observable<any> {
    nota.id_professor = this.localstorageService.getUser().id_professor;
    console.log(this.localstorageService.getUser().id_professor)
    nota.id_disciplina = this.localstorageService.getUser().id_disciplina;
    return this.httpCliente.post<any>(this.URL + "professor/salvarNotaAluno", { nota: nota });
  }

}
