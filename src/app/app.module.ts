import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LocalstorageService} from "./auth/localstorage.service";
import { AuthService } from "./auth/auth.service";

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SistemaModule } from 'src/app/sistema/sistema.module'
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login/login.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SistemaModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [HttpClientModule, LocalstorageService, AuthService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
