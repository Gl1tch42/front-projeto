import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/auth/localstorage.service';

interface Boletim {
  aluno: string;
  disciplinas: Disciplina[];
}

interface Disciplina {
  nome: string;
  bimestre1?: number;
  bimestre2?: number;
  bimestre3?: number;
  bimestre4?: number;
  recuperacao?: number;
  mediaFinal?: number;
}

@Injectable({
  providedIn: 'root'
})
export class BoletimEscolarService {
  readonly URL = 'https://sistemaescolaapi.azurewebsites.net/api/';


  constructor(private httpCliente: HttpClient, private localstorageService: LocalstorageService) { }

  getBoletim(): Observable<Boletim> {
    return this.httpCliente.post<Boletim>(this.URL + "aluno/getBoletim",{
      id: this.localstorageService.getUser().id_aluno
    });
  }

}
