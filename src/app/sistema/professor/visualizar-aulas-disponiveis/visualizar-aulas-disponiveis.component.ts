import { Component, OnInit } from '@angular/core';
import { VisualizarAulasService } from './visualizar-aulas.service';

@Component({
  selector: 'app-visualizar-aulas-disponiveis',
  templateUrl: './visualizar-aulas-disponiveis.component.html',
  styleUrls: ['./visualizar-aulas-disponiveis.component.css']
})
export class VisualizarAulasDisponiveisComponent implements OnInit {

  diasSemana: string[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']; // Dias da semana
  disciplinaFixa: string = 'Matemática'; // Disciplina fixa do professor
  turmaFixa: string = 'Turma A'; // Turma fixa do professor
  horarios: string[] = ['08:00-09:00', '09:00-10:00', '10:10-11:10', '11:10-12:10'];
  aulasSemana: any[] = []

  constructor(private visualizarAulasService: VisualizarAulasService) { }

  ngOnInit(): void {
    // Inicialize aulasSemana com os dados das aulas para a semana atual
    this.getAulas();

  }

  getAulas() {
    this.visualizarAulasService.getAulasProfessor().subscribe(res => {
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
