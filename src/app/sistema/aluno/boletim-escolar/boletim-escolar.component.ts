import { Component, OnInit } from '@angular/core';
import { BoletimEscolarService } from './boletim-escolar.service';

interface Disciplina {
  nome: string;
  bimestre1?: number;
  bimestre2?: number;
  bimestre3?: number;
  bimestre4?: number;
  recuperacao?: number;
  mediaFinal?: number;
}

@Component({
  selector: 'app-boletim-escolar',
  templateUrl: './boletim-escolar.component.html',
  styleUrls: ['./boletim-escolar.component.css']
})
export class BoletimEscolarComponent implements OnInit {
  
  aluno: string;
  disciplinas: Disciplina[];

  constructor(private boletimService: BoletimEscolarService) { }

  ngOnInit() {
    this.getBoletim()
  }

  getBoletim() {
    this.boletimService.getBoletim().subscribe((boletim) => {
      this.aluno = boletim.aluno;
      this.disciplinas = boletim.disciplinas;
      console.log(this.disciplinas)
    });
  }

  calcularMediaFinal(disciplina: Disciplina) {

    const notasBimestres = [
      disciplina.bimestre1,
      disciplina.bimestre2,
      disciplina.bimestre3,
      disciplina.bimestre4
    ];

    const notasValidas = notasBimestres.filter(nota => nota !== null && nota !== undefined);
    const somaNotas = notasValidas.reduce((total, nota) => total + parseFloat(nota.toString()), 0);
    const media = somaNotas / notasValidas.length;

    if(notasValidas.length == 0) return "--";

    if(disciplina.recuperacao > media) return disciplina.recuperacao;

    return media;
  }

  calcularStaus(media, disciplina: Disciplina) {
    if(media == '--') return "--";
    else if(media >= 7) return "aprovado";
    else if(disciplina.recuperacao != null && media < 7) return "reprovado";
    else if(media >= 4) return "recuperação";
    else if(media < 4) return "reprovado";
  }

}
