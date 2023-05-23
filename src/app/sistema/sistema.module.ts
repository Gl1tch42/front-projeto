import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SidebarComponent } from 'src/app/layout/Sidebar/Sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SistemaComponent, SidebarComponent],
  exports: [SistemaComponent]
})
export class SistemaModule { }
