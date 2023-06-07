import { Component, OnInit } from '@angular/core';
import { GerenciarNotaService } from './gerenciar-nota.service';

interface Aluno {
  nome: string;
  matricula: string;
  notas: {
    primeiroBimestre: any;
    segundoBimestre: any;
    terceiroBimestre: any;
    quartoBimestre: any;
    recuperacao: any;
    notaFinal: any;
    status: string;
  };
}

interface Turma {
  nome: string;
  id: number;
  alunos: Aluno[];
}

interface NotaSaved {
  nota: string;
  periodo: string;
  id_disciplina: number;
  id_professor: number;
  id_aluno: any;
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
    const indexTurmas = this.turmas.findIndex(x => x == this.turmaSelecionada);
    const indexAluno = this.turmas[indexTurmas].alunos.findIndex(x => x == aluno);
    console.log(event.target.value)
    if(event.target.value == "")event.target.value = 0;
    if(parseFloat(event.target.value) > 10) event.target.value = 10;
    if(parseFloat(event.target.value) < 0) event.target.value = 0
    
    this.turmas[indexTurmas].alunos[indexAluno].notas[periodo] = parseFloat(event.target.value);


    let nota: NotaSaved = {
      id_aluno: aluno.matricula,
      nota: event.target.value,
      periodo: periodo,
      id_disciplina: 0,
      id_professor: 0
    };

    this.gerenciarNotaService.salvarNota(nota).subscribe(res => {
      console.log(res)
    })
  }

  calcularMedia(aluno: Aluno) {
    const { primeiroBimestre, segundoBimestre, terceiroBimestre, quartoBimestre, recuperacao } = aluno.notas;
    let notaFinal = (parseFloat(primeiroBimestre) + parseFloat(segundoBimestre) + parseFloat(terceiroBimestre) + parseFloat(quartoBimestre)) / 4;
    if(parseFloat(recuperacao) > notaFinal) notaFinal = parseFloat(recuperacao);
    return notaFinal;
  }

  calcularStatus(aluno: Aluno) {
    const { primeiroBimestre, segundoBimestre, terceiroBimestre, quartoBimestre, recuperacao } = aluno.notas;
    aluno.notas.notaFinal = (parseFloat(primeiroBimestre) + parseFloat(segundoBimestre) + parseFloat(terceiroBimestre) + parseFloat(quartoBimestre)) / 4;

    if (parseFloat(recuperacao) > aluno.notas.notaFinal){
      aluno.notas.notaFinal = parseFloat(recuperacao);
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
