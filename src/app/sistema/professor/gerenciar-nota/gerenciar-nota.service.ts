import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/auth/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class GerenciarNotaService {

  readonly URL = 'http://localhost:5000/api/';

  constructor(private httpCliente: HttpClient, private localstorageService: LocalstorageService) { }

  buscarTumasDaAula(): Observable<any> {
    console.log(this.localstorageService.getUser().id_professor)
    return this.httpCliente.post<any>(this.URL + "professor/buscarTumasDaAula", { idProfessor: this.localstorageService.getUser().id_professor, idDiciplina: this.localstorageService.getUser().id_disciplina });
  }

}
