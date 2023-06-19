import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/auth/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class VisualizarAulasService {
  readonly URL = 'https://sistemaescolaapi.azurewebsites.net/api/';

  constructor(private httpCliente: HttpClient, private localstorageService: LocalstorageService) { }
  
  getAulasProfessor(): Observable<any> {
    return this.httpCliente.post<any>(this.URL + "professor/getAulasProfessor",
    { 
      idProfessor: this.localstorageService.getUser().id_professor,
      diciplina: this.localstorageService.getUser().disciplina 
    });
  }
}
