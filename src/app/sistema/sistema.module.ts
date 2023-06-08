import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SidebarComponent } from 'src/app/layout/Sidebar/Sidebar.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from 'src/app/sistema/perfil/perfil.component';
import { GerenciarNotaComponent } from 'src/app/sistema/professor/gerenciar-nota/gerenciar-nota.component';
import { VisualizarAulasDisponiveisComponent } from 'src/app/sistema/professor/visualizar-aulas-disponiveis/visualizar-aulas-disponiveis.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [SistemaComponent, SidebarComponent, PerfilComponent, GerenciarNotaComponent, VisualizarAulasDisponiveisComponent],
  exports: [SistemaComponent]
})
export class SistemaModule { }
