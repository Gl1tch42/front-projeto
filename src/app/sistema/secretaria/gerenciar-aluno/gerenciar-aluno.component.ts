import { Component, OnInit } from '@angular/core';
import { SecretariaService } from '../secretaria.service';

@Component({
  selector: 'app-gerenciar-aluno',
  templateUrl: './gerenciar-aluno.component.html',
  styleUrls: ['./gerenciar-aluno.component.css']
})

export class GerenciarAlunoComponent implements OnInit {
  alunos: Aluno[]; // Lista de alunos
  turmas: any[];
  novoAluno: Aluno = { email: '', id_aluno: 0, nm_aluno: '', endereco: '', telefone: '', id_turmas: 0, turma: ''};
  editMode = false; // Modo de edição ativado ou desativado
  alunoEmEdicao: Aluno = null; // Aluno atualmente em edição
  carregado = false

  constructor(
    private secretariaService: SecretariaService
  ) { }

  ngOnInit() {
    // Chamar o método para carregar a lista de alunos no início
    this.carregarAlunos();
    this.carregarTurma();
  }

  carregarAlunos() {
    // Chamar o serviço de alunos para obter a lista de alunos
    this.secretariaService.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
      this.carregado = true;
    });
  }

  carregarTurma() {
    // Chamar o serviço de alunos para obter a lista de alunos
    this.secretariaService.getTurmas().subscribe(turmas => {
      this.turmas = turmas;
      this.carregado = true;
    });
  }

  adicionarAluno() {
    // Chamar o serviço de alunos para adicionar o novo aluno
    this.secretariaService.addAluno(this.novoAluno).subscribe(() => {
      this.carregarAlunos();
      this.novoAluno = { email: '', id_aluno: 0, nm_aluno: '', endereco: '', telefone: '', id_turmas: 0, turma: '' };
    });

    // Exemplo: adicionar o aluno diretamente à lista de alunos
    // this.alunos.push(this.novoAluno);
    // this.novoAluno = { email: '', id_aluno: 0, nm_aluno: '', endereco: '', telefone: '', id_turmas: 0, turma: '' };
  }

  editarAluno(aluno: Aluno) {
    console.log(aluno)
    this.alunoEmEdicao = aluno;
    this.editMode = true;
  }

  salvarEdicao() {
    // Chamar o serviço de alunos para salvar as alterações do aluno em edição
    // this.alunoService.editarAluno(this.alunoEmEdicao).subscribe(() => {
    //   this.carregarAlunos();
    //   this.cancelarEdicao();
    // });

    // Exemplo: atualizar o aluno diretamente na lista de alunos
    const index = this.alunos.findIndex(aluno => aluno.id_aluno === this.alunoEmEdicao.id_aluno);
    if (index !== -1) {
      this.alunos[index] = { ...this.alunoEmEdicao };
    }
    this.cancelarEdicao();
  }

  cancelarEdicao() {
    this.editMode = false;
    this.alunoEmEdicao = null;
  }

  excluirAluno(aluno: Aluno) {
    // Chamar o serviço de alunos para excluir o aluno
    // this.alunoService.excluirAluno(aluno.id_aluno).subscribe(() => {
    //   this.carregarAlunos();
    // });

    // Exemplo: remover o aluno diretamente da lista de alunos
    this.alunos = this.alunos.filter(a => a.id_aluno !== aluno.id_aluno);
  }
}

interface Aluno {
  email: string;
  id_aluno: number;
  nm_aluno: string;
  endereco: string;
  telefone: string;
  id_turmas: number;
  turma: string;
}
