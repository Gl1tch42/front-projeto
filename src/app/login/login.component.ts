import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matricula: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  fazerLogin() {
    if (this.matricula) {
      if (this.matricula.startsWith('SECRETARIA')) {
        this.router.navigate(['/secretaria']);
      } else if (this.matricula.startsWith('PROFESSOR')) {
        this.router.navigate(['/professor']);
      } else if (this.matricula.startsWith('ALUNO')) {
        this.router.navigate(['/aluno']);
      } else {
        alert('Matrícula inválida! Por favor, tente novamente.');
      }
    } else {
      alert('Por favor, insira sua matrícula.');
    }
  }

}
