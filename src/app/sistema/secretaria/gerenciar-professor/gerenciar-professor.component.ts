import { Component, OnInit } from '@angular/core';
import { SecretariaService } from '../secretaria.service';

@Component({
  selector: 'app-gerenciar-professor',
  templateUrl: './gerenciar-professor.component.html',
  styleUrls: ['./gerenciar-professor.component.css']
})
export class GerenciarProfessorComponent implements OnInit {

  professores: Professor[]; // Lista de professores
  disciplinas: Disciplina[]; // Lista de disciplinas
  novoProfessor: Professor = {
    id_professor: 0,
    email: '',
    nm_professor: '',
    id_disciplina: 0,
    disciplina: '',
    telefone: '',
    endereco: ''
  };
  editMode = false; // Modo de edição ativado ou desativado
  professorEmEdicao: Professor = null; // Professor atualmente em edição

  constructor(private professorService: SecretariaService) { }

  ngOnInit() {
    // Chamar o método para carregar a lista de professores e disciplinas no início
    this.carregarProfessores();
    this.carregarDisciplinas();
  }

  carregarProfessores() {
    // Chamar o serviço de professores para obter a lista de professores
    this.professorService.getProfessores().subscribe(professores => {
      this.professores = professores;
    });

  }

  carregarDisciplinas() {
    // Chamar o serviço de disciplinas para obter a lista de disciplinas
    this.professorService.getDisciplinas().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
    });
  }

  adicionarProfessor() {
    // Chamar o serviço de professores para adicionar o novo professor
    let professor = { email: this.novoProfessor.email, nm_professor: this.novoProfessor.nm_professor, id_disciplina: this.novoProfessor.id_disciplina, telefone: this.novoProfessor.telefone, endereco: this.novoProfessor.endereco };
    this.professorService.addProfessor(professor).subscribe(() => {
      this.carregarProfessores();
      this.novoProfessor = { id_professor: 0, email: '', nm_professor: '', id_disciplina: 0, disciplina: '', telefone: '', endereco: '' };
    });
  }

  editarProfessor(professor: Professor) {
    this.editMode = true;
    this.professorEmEdicao = { ...professor };
  }

  salvarEdicao() {
    let professor = {
      id_professor: this.professorEmEdicao.id_professor,
      email: this.professorEmEdicao.email,
      nm_professor: this.professorEmEdicao.nm_professor,
      id_disciplina: this.professorEmEdicao.id_disciplina,
      telefone: this.professorEmEdicao.telefone,
      endereco: this.professorEmEdicao.endereco
    };
    // Chamar o serviço de professores para salvar as alterações do professor em edição
    this.professorService.editarProfessor(professor).subscribe(() => {
      this.carregarProfessores();
      this.cancelarEdicao();
    });
  }

  cancelarEdicao() {
    this.editMode = false;
    this.professorEmEdicao = null;
  }

  excluirProfessor(professor: Professor) {
    // Chamar o serviço de professores para excluir o professor
    this.professorService.excluirProfessor(professor.id_professor).subscribe(() => {
      this.carregarProfessores();
    });
  }
}

interface Professor {
  id_professor: number;
  email: string;
  nm_professor: string;
  id_disciplina: number;
  disciplina: string;
  telefone: string;
  endereco: string;
}

interface Disciplina {
  id_disciplina: number;
  nm_disciplina: string;
}