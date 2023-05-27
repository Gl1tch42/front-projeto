import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/auth/localstorage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  profile: any = {};

  constructor(private localstorageService: LocalstorageService) {
    let storage = localstorageService.getUser();

    if(storage.nm_aluno != undefined) {
      this.profile.name = storage.nm_aluno;
      this.profile.registration = storage.id_aluno;
      this.profile.address = storage.endereco;
      this.profile.number = storage.telefone;
      this.profile.classroom = storage.turma;
      this.profile.email = storage.email;
      this.profile.type = 'aluno';
    }

    if(storage.nm_professor != undefined) {
      this.profile.name = storage.nm_professor;
      this.profile.registration = storage.id_professor;
      this.profile.address = storage.endereco;
      this.profile.number = storage.telefone;
      this.profile.subject = storage.disciplina;
      this.profile.email = storage.email;
      this.profile.type = "professor"
    }

    if(storage.id_secretaria != undefined) {
      this.profile.name = storage.nome;
      this.profile.registration = storage.id_secretaria;
      this.profile.address = storage.endereco;
      this.profile.number = storage.telefone;
      this.profile.email = storage.email;
      this.profile.type = "administrador"
    }
  }

  ngOnInit() {
  }

}
