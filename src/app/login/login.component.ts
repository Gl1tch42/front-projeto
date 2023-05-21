import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matricula: string = 'aluno';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  fazerLogin() {
    alert('Matrícula inválida! Por favor, tente novamente.');
    alert('Por favor, insira sua matrícula.');
  }

}
