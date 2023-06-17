import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-aluno',
  templateUrl: './gerenciar-aluno.component.html',
  styleUrls: ['./gerenciar-aluno.component.css']
})

export class GerenciarAlunoComponent implements OnInit {
  alunos: Aluno[]; // Lista de alunos
  novoAluno: Aluno = { email: '', id_aluno: 0, nm_aluno: '', endereco: '', telefone: '', id_turmas: 0 };
  editMode = false; // Modo de edição ativado ou desativado
  alunoEmEdicao: Aluno = null; // Aluno atualmente em edição

  constructor(
    // Injetar o serviço de alunos aqui (exemplo: private alunoService: AlunoService)
  ) { }

  ngOnInit() {
    // Chamar o método para carregar a lista de alunos no início
    this.carregarAlunos();
  }

  carregarAlunos() {
    // Chamar o serviço de alunos para obter a lista de alunos
    // this.alunoService.getAlunos().subscribe(alunos => {
    //   this.alunos = alunos;
    // });
    
    // Exemplo com dados estáticos
    this.alunos = [
      { email: 'aluno1@example.com', id_aluno: 1, nm_aluno: 'Aluno 1', endereco: 'Endereço 1', telefone: '1234567890', id_turmas: 1 },
      { email: 'aluno2@example.com', id_aluno: 2, nm_aluno: 'Aluno 2', endereco: 'Endereço 2', telefone: '9876543210', id_turmas: 2 },
    ];
  }

  adicionarAluno() {
    // Chamar o serviço de alunos para adicionar o novo aluno
    // this.alunoService.adicionarAluno(this.novoAluno).subscribe(() => {
    //   this.carregarAlunos();
    //   this.novoAluno = { email: '', id_aluno: 0, nm_aluno: '', endereco: '', telefone: '', id_turmas: 0 };
    // });

    // Exemplo: adicionar o aluno diretamente à lista de alunos
    this.alunos.push(this.novoAluno);
    this.novoAluno = { email: '', id_aluno: 0, nm_aluno: '', endereco: '', telefone: '', id_turmas: 0 };
  }

  editarAluno(aluno: Aluno) {
    this.editMode = true;
    this.alunoEmEdicao = { ...aluno };
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
}
