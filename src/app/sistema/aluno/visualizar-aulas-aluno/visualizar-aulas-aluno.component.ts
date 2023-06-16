import { Component, OnInit } from '@angular/core';
import { VizualizarAulasAlunoService } from './vizualizar-aulas-aluno.service';

@Component({
  selector: 'app-visualizar-aulas-aluno',
  templateUrl: './visualizar-aulas-aluno.component.html',
  styleUrls: ['./visualizar-aulas-aluno.component.css']
})
export class VisualizarAulasAlunoComponent implements OnInit {

  diasSemana: string[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']; // Dias da semana
  disciplinaFixa: string = 'Matemática'; // Disciplina fixa do professor
  turmaFixa: string = 'Turma A'; // Turma fixa do professor
  horarios: string[] = ['08:00-09:00', '09:00-10:00', '10:10-11:10', '11:10-12:10'];
  aulasSemana: any[] = []

  constructor(private visualizarAulasService: VizualizarAulasAlunoService) { }

  ngOnInit(): void {
    // Inicialize aulasSemana com os dados das aulas para a semana atual
    this.getAulas();

  }

  getAulas() {
    this.visualizarAulasService.getAulasAluno().subscribe(res => {
      console.log(res)
      this.aulasSemana = res
    });
  }

  // Função para obter a aula com base no dia e horário
  getAula(dia: string, horario: string): any {
    console.log(this.aulasSemana.find(aula => aula.dia === dia && aula.hora === horario))
    return this.aulasSemana.find(aula => aula.dia === dia && aula.hora === horario);
  }
}
