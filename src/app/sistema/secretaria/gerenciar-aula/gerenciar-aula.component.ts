import { Component, OnInit } from '@angular/core';
import { SecretariaService } from '../secretaria.service';

@Component({
  selector: 'app-gerenciar-aula',
  templateUrl: './gerenciar-aula.component.html',
  styleUrls: ['./gerenciar-aula.component.css']
})
export class GerenciarAulaComponent implements OnInit {
  aulas: Aula[]; // Lista de aulas
  turmas: Turma[]; // Lista de turmas
  professores: Professor[]; // Lista de professores
  horarios: string[] = ['08:00-09:00', '09:00-10:00', '10:10-11:10', '11:10-12:10']; // Lista de horários disponíveis
  dias: string[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']; // Lista de dias da semana
  novaAula: Aula = {
    id_aula: 0,
    dia: '',
    horario: '',
    id_turmas: 0,
    nm_turma: '',
    id_professor: 0,
    nm_professor: ''
  };
  editMode = false; // Modo de edição ativado ou desativado
  aulaEmEdicao: Aula = null; // Aula atualmente em edição

  constructor(private aulaService: SecretariaService) { }

  ngOnInit() {
    // Chamar o método para carregar a lista de aulas, turmas, professores no início
    this.carregarAulas();
    this.carregarTurmas();
    this.carregarProfessores();
  }

  carregarAulas() {
    // Chamar o serviço de aulas para obter a lista de aulas
    this.aulaService.getAulas().subscribe(aulas => {
      this.aulas = aulas;
    });
  }

  carregarTurmas() {
    // Chamar o serviço de turmas para obter a lista de turmas
    this.aulaService.getTurmas().subscribe(turmas => {
      this.turmas = turmas;
    });
  }

  carregarProfessores() {
    // Chamar o serviço de professores para obter a lista de professores
    this.aulaService.getProfessores().subscribe(professores => {
      this.professores = professores;
    });
  }

  adicionarAula() {
    // Chamar o serviço de aulas para adicionar a nova aula
    let dia = '';
    if (this.novaAula.dia.includes('Segunda')) {
      dia = 'seg';
    } else if (this.novaAula.dia.includes('Terça')) {
      dia = 'ter';
    } else if (this.novaAula.dia.includes('Quarta')) {
      dia = 'qua';
    } else if (this.novaAula.dia.includes('Quinta')) {
      dia = 'qui';
    } else if (this.novaAula.dia.includes('Sexta')) {
      dia = 'sex';
    }

    let aula = {
      horario: dia + " " + this.novaAula.horario,
      id_turmas: this.novaAula.id_turmas,
      id_professor: this.novaAula.id_professor,
    };

    this.aulaService.addAula(aula).subscribe(() => {
      this.carregarAulas();
      this.novaAula = { id_aula: 0, dia: '', horario: '', id_turmas: 0, nm_turma: '', id_professor: 0, nm_professor: '' };
    }, err => alert(err.msg) );
  }

  editarAula(aula: Aula) {
    this.editMode = true;
    this.aulaEmEdicao = { ...aula };
  }

  salvarEdicao() {
    let dia = '';
    if (this.aulaEmEdicao.dia.includes('Segunda')) {
      dia = 'seg';
    } else if (this.aulaEmEdicao.dia.includes('Terça')) {
      dia = 'ter';
    } else if (this.aulaEmEdicao.dia.includes('Quarta')) {
      dia = 'qua';
    } else if (this.aulaEmEdicao.dia.includes('Quinta')) {
      dia = 'qui';
    } else if (this.aulaEmEdicao.dia.includes('Sexta')) {
      dia = 'sex';
    }

    let aula = {
      horario: dia + " " + this.aulaEmEdicao.horario,
      id_turmas: this.aulaEmEdicao.id_turmas,
      id_professor: this.aulaEmEdicao.id_professor,
    };
    // Chamar o serviço de aulas para salvar as alterações da aula em edição
    this.aulaService.editarAula(aula).subscribe(() => {
      this.carregarAulas();
      this.cancelarEdicao();
    }, err => alert(err.msg) );
  }

  cancelarEdicao() {
    this.editMode = false;
    this.aulaEmEdicao = null;
  }

  excluirAula(aula: Aula) {
    let dia = '';
    if (aula.dia.includes('Segunda')) {
      dia = 'seg';
    } else if (aula.dia.includes('Terça')) {
      dia = 'ter';
    } else if (aula.dia.includes('Quarta')) {
      dia = 'qua';
    } else if (aula.dia.includes('Quinta')) {
      dia = 'qui';
    } else if (aula.dia.includes('Sexta')) {
      dia = 'sex';
    }

    let aulaaux = {
      horario: dia + " " + aula.horario,
      id_turmas: aula.id_turmas,
      id_professor: aula.id_professor,
    };
    // Chamar o serviço de aulas para excluir a aula
    this.aulaService.excluirAula(aulaaux).subscribe(() => {
      this.carregarAulas();
    }, err => alert(err) );
  }
}

interface Aula {
  id_aula: number;
  dia: string;
  horario: string;
  id_turmas: number;
  nm_turma: string;
  id_professor: number;
  nm_professor: string;
}

interface Turma {
  id_turma: number;
  nm_turma: string;
}

interface Professor {
  id_professor: number;
  nm_professor: string;
}