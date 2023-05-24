import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';
import { LocalstorageService } from '../auth/localstorage.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LocalstorageService, AuthService, LoginService],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
