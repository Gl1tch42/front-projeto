import { Component, OnInit } from '@angular/core';
import { SecretariaService } from '../secretaria.service';

@Component({
  selector: 'app-gerenciar-disciplinas',
  templateUrl: './gerenciar-disciplinas.component.html',
  styleUrls: ['./gerenciar-disciplinas.component.css']
})
export class GerenciarDisciplinasComponent implements OnInit {

  disciplina: Disciplina[]; // Lista de turmas
  novaTurma: Disciplina = { id_disciplina: 0, nm_disciplina: '' };
  editMode = false; // Modo de edição ativado ou desativado
  turmaEmEdicao: Disciplina = null; // Turma atualmente em edição

  constructor(private turmaService: SecretariaService) { }

  ngOnInit() {
    // Chamar o método para carregar a lista de turmas no início
    this.carregarTurmas();
  }

  carregarTurmas() {
    // Chamar o serviço de turmas para obter a lista de turmas
    this.turmaService.getDisciplinas().subscribe(disciplina => {
      this.disciplina = disciplina;
    });
    
  }

  adicionarTurma() {
    // Chamar o serviço de turmas para adicionar a nova turma
    const disciplina = { nm_disciplina: this.novaTurma.nm_disciplina }
    this.turmaService.addDisciplinas(disciplina).subscribe(() => {
      this.carregarTurmas();
      this.novaTurma = { id_disciplina: 0, nm_disciplina: '' };
    });
  }

  editarTurma(disciplina: Disciplina) {
    this.editMode = true;
    this.turmaEmEdicao = { ...disciplina };
  }

  salvarEdicao() {
    // Chamar o serviço de turmas para salvar as alterações da turma em edição
    this.turmaService.editarDisciplinas(this.turmaEmEdicao).subscribe(() => {
      this.carregarTurmas();
      this.cancelarEdicao();
    });
  }

  cancelarEdicao() {
    this.editMode = false;
    this.turmaEmEdicao = null;
  }

  excluirTurma(turma: Disciplina) {
    // Chamar o serviço de turmas para excluir a turma
    this.turmaService.excluirDisciplinas(turma.id_disciplina).subscribe(() => {
      this.carregarTurmas();
    });
  }
}

interface Disciplina {
  id_disciplina: number;
  nm_disciplina: string;
}
