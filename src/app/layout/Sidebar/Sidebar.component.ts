import { error } from '@angular/compiler/src/util';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/auth/localstorage.service';
import { LoginService } from 'src/app/login/login.service';

declare var $: any;
@Component({
  selector: 'app-Sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.css']
})
export class SidebarComponent implements OnInit  {

  perfil: any;
  visao: string = ";"

  constructor(private router: Router, private loginService: LoginService, private localstorageService: LocalstorageService) {
    this.perfil = localstorageService.getUser();
  }

  ngOnInit() {
    console.log(this.perfil);

    if(this.perfil.nm_aluno != undefined) {
      this.visao = "aluno"
    }

    if(this.perfil.nm_professor != undefined) {
      this.visao = "professor"
    }

    if(this.perfil.id_secretaria != undefined) {
      this.visao = "administrador"
    }
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        this.localstorageService.removeToken();
        this.localstorageService.removeUser();
        this.router.navigate(['/login']);
      }, error => alert('não foi possivel deslogar! Por favor, tente novamente.')
    )
  }

}
