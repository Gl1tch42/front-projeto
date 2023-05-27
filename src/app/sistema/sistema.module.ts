import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SidebarComponent } from 'src/app/layout/Sidebar/Sidebar.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from 'src/app/sistema/perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SistemaComponent, SidebarComponent, PerfilComponent],
  exports: [SistemaComponent]
})
export class SistemaModule { }
