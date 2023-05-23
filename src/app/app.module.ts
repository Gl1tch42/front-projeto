import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LocalstorageService} from "./auth/localstorage.service";
import { AuthService } from "./auth/auth.service";

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SistemaModule } from 'src/app/sistema/sistema.module'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SistemaModule
  ],
  providers: [LocalstorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
