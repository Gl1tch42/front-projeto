import { Component, OnInit } from '@angular/core';
import { GerenciarNotaService } from './gerenciar-nota.service';

interface Aluno {
  nome: string;
  matricula: string;
  notas: {
    primeiroBimestre: number;
    segundoBimestre: number;
    terceiroBimestre: number;
    quartoBimestre: number;
    recuperacao: number;
    notaFinal: number;
    status: string;
  };
}

interface Turma {
  nome: string;
  alunos: Aluno[];
}


@Component({
  selector: 'app-gerenciar-nota',
  templateUrl: './gerenciar-nota.component.html',
  styleUrls: ['./gerenciar-nota.component.css']
})
export class GerenciarNotaComponent implements OnInit {

  turmas: Turma[] = [];

  turmaSelecionada: Turma | null = null;

  constructor(private gerenciarNotaService: GerenciarNotaService) { }

  ngOnInit(): void {
    this.getTurma();
  }

  getTurma() {
    this.gerenciarNotaService.buscarTumasDaAula().subscribe(res => {
      console.log(res)
      this.turmas = res;
    })
  }

  selecionarTurma(turma: Turma) {
    this.turmaSelecionada = turma;
  }

  voltar() {
    this.turmaSelecionada = null;
  }

  calcularNotaFinal(aluno: Aluno, event, periodo) {
    console.log(aluno)
    const indexTurmas = this.turmas.findIndex(x => x == this.turmaSelecionada);
    const indexAluno = this.turmas[indexTurmas].alunos.findIndex(x => x == aluno);
    console.log(event.target.value)
    this.turmas[indexTurmas].alunos[indexAluno].notas[periodo] = parseFloat(event.target.value);
  }

  calcularMedia(aluno: Aluno) {
    const { primeiroBimestre, segundoBimestre, terceiroBimestre, quartoBimestre, recuperacao } = aluno.notas;
    let notaFinal = (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre) / 4;
    if(recuperacao > notaFinal) notaFinal = recuperacao;
    return notaFinal;
  }

  calcularStatus(aluno: Aluno) {
    const { primeiroBimestre, segundoBimestre, terceiroBimestre, quartoBimestre, recuperacao } = aluno.notas;
    aluno.notas.notaFinal = (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre) / 4;

    if (recuperacao > aluno.notas.notaFinal){
      aluno.notas.notaFinal = recuperacao;
    }

    if (aluno.notas.notaFinal >= 7) {
      return 'Aprovado';
    } else if (aluno.notas.notaFinal >= 3) {
      return 'Recuperação';
    } else {
      return 'Reprovado';
    }
  }

}
