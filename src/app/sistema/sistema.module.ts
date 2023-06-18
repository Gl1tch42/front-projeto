import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SidebarComponent } from 'src/app/layout/Sidebar/Sidebar.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from 'src/app/sistema/perfil/perfil.component';
import { GerenciarNotaComponent } from 'src/app/sistema/professor/gerenciar-nota/gerenciar-nota.component';
import { VisualizarAulasDisponiveisComponent } from 'src/app/sistema/professor/visualizar-aulas-disponiveis/visualizar-aulas-disponiveis.component';
import { BoletimEscolarComponent } from "src/app/sistema/aluno/boletim-escolar/boletim-escolar.component";

import { GerenciarTurmaComponent } from 'src/app/sistema/secretaria/gerenciar-turma/gerenciar-turma.component';
import { GerenciarProfessorComponent } from 'src/app/sistema/secretaria/gerenciar-professor/gerenciar-professor.component';
import { GerenciarAlunoComponent } from 'src/app/sistema/secretaria/gerenciar-aluno/gerenciar-aluno.component';
import { GerenciarAulaComponent } from 'src/app/sistema/secretaria/gerenciar-aula/gerenciar-aula.component';



import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VisualizarAulasAlunoComponent } from './aluno/visualizar-aulas-aluno/visualizar-aulas-aluno.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    SistemaComponent, 
    SidebarComponent, 
    PerfilComponent, 
    GerenciarNotaComponent, 
    VisualizarAulasDisponiveisComponent, 
    BoletimEscolarComponent,
    VisualizarAulasAlunoComponent,

    GerenciarTurmaComponent,
    GerenciarProfessorComponent,
    GerenciarAlunoComponent,
    GerenciarAulaComponent
  ],
  exports: [SistemaComponent]
})
export class SistemaModule { }
