import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matricula: string = 'aluno';
  login: string = '2';

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  fazerLogin() {
    if(this.matricula == 'aluno')
    this.loginService.loginAluno(this.login).subscribe(arg => console.log(arg));
    
    alert('Matrícula inválida! Por favor, tente novamente.');
    alert('Por favor, insira sua matrícula.');
  }

}
