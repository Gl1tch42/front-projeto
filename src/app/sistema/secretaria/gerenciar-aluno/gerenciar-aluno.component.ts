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
      // this.carregado = true;
    }, err => console.log(err));
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
    let aluno = { email: this.novoAluno.email, nm_aluno: this.novoAluno.nm_aluno, endereco: this.novoAluno.endereco, telefone: this.novoAluno.telefone, id_turmas: this.novoAluno.id_turmas, faltas: '0' };
    console.log(aluno)
    this.secretariaService.addAluno(aluno).subscribe(() => {
      this.carregarAlunos();
      this.novoAluno = { email: '', id_aluno: 0, nm_aluno: '', endereco: '', telefone: '', id_turmas: 0, turma: '' };
    });
  }

  editarAluno(aluno: Aluno) {
    console.log(aluno)
    this.alunoEmEdicao = aluno;
    this.editMode = true;
  }

  salvarEdicao() {
    // Chamar o serviço de alunos para salvar as alterações do aluno em edição
    let aluno = { email: this.alunoEmEdicao.email, id_aluno: this.alunoEmEdicao.id_aluno, nm_aluno: this.alunoEmEdicao.nm_aluno, endereco: this.alunoEmEdicao.endereco, telefone: this.alunoEmEdicao.telefone, id_turmas: this.alunoEmEdicao.id_turmas, faltas: '0'  };
    this.secretariaService.editarAluno(aluno).subscribe(() => {
      this.carregarAlunos();
      this.cancelarEdicao();
    });
  }

  cancelarEdicao() {
    this.editMode = false;
    this.alunoEmEdicao = null;
  }

  excluirAluno(aluno: Aluno) {
    this.secretariaService.excluirAluno(aluno.id_aluno).subscribe(() => {
      this.carregarAlunos();
    });
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
