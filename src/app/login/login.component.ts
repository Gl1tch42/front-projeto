import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service'
import { error } from '@angular/compiler/src/util';
import { LocalstorageService } from '../auth/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matricula: string = 'aluno';
  login: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private localstorageService: LocalstorageService
  ) { }

  ngOnInit() {
  }

  fazerLogin() {
    if (this.matricula == 'aluno')
      this.loginService.loginAluno(this.login).subscribe(arg => {
        console.log(arg)
        this.localstorageService.saveToken(arg.accessToken)
        this.localstorageService.saveUser(arg.user)
        this.router.navigate(['/sistema/perfil']);
      }, error => alert('Matrícula inválida! Por favor, tente novamente.')
      );

    if (this.matricula == 'secretaria')
      this.loginService.loginSecretaria(this.login).subscribe(arg => {
        console.log(arg)
        this.localstorageService.saveToken(arg.accessToken)
        this.localstorageService.saveUser(arg.user)
        this.router.navigate(['/sistema/perfil']);
      }, error => alert('Matrícula inválida! Por favor, tente novamente.')
      );

    if (this.matricula == 'professor')
      this.loginService.loginProfessor(this.login).subscribe(arg => {
        console.log(arg)
        this.localstorageService.saveToken(arg.accessToken)
        this.localstorageService.saveUser(arg.user)
        this.router.navigate(['/sistema/perfil']);
      }, error => alert('Matrícula inválida! Por favor, tente novamente.')
      );

  }

}
