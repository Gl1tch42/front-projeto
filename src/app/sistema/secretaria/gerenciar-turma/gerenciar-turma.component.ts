import { Component, OnInit } from '@angular/core';
import { SecretariaService } from '../secretaria.service';

@Component({
  selector: 'app-gerenciar-turma',
  templateUrl: './gerenciar-turma.component.html',
  styleUrls: ['./gerenciar-turma.component.css']
})
export class GerenciarTurmaComponent implements OnInit {
  turmas: Turma[]; // Lista de turmas
  novaTurma: Turma = { id_turmas: 0, nm_turma: '' };
  editMode = false; // Modo de edição ativado ou desativado
  turmaEmEdicao: Turma = null; // Turma atualmente em edição

  constructor(private turmaService: SecretariaService) { }

  ngOnInit() {
    // Chamar o método para carregar a lista de turmas no início
    this.carregarTurmas();
  }

  carregarTurmas() {
    // Chamar o serviço de turmas para obter a lista de turmas
    this.turmaService.getTurmas().subscribe(turmas => {
      this.turmas = turmas;
    });
    
  }

  adicionarTurma() {
    // Chamar o serviço de turmas para adicionar a nova turma
    const turma = { nm_turma: this.novaTurma.nm_turma }
    this.turmaService.addTurmas(turma).subscribe(() => {
      this.carregarTurmas();
      this.novaTurma = { id_turmas: 0, nm_turma: '' };
    });
  }

  editarTurma(turma: Turma) {
    this.editMode = true;
    this.turmaEmEdicao = { ...turma };
  }

  salvarEdicao() {
    // Chamar o serviço de turmas para salvar as alterações da turma em edição
    this.turmaService.editarTurmas(this.turmaEmEdicao).subscribe(() => {
      this.carregarTurmas();
      this.cancelarEdicao();
    });
  }

  cancelarEdicao() {
    this.editMode = false;
    this.turmaEmEdicao = null;
  }

  excluirTurma(turma: Turma) {
    // Chamar o serviço de turmas para excluir a turma
    this.turmaService.excluirTurma(turma.id_turmas).subscribe(() => {
      this.carregarTurmas();
    });
  }
}

interface Turma {
  id_turmas: number;
  nm_turma: string;
}
