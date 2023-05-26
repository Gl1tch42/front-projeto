import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SistemaComponent } from 'src/app/sistema/sistema.component';
import { AuthService } from './auth/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sistema', component: SistemaComponent },
  { path: 'home', component: SistemaComponent, canActivate: [AuthService] },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }