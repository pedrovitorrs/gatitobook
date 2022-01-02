import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/authentication/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  user$ = this.usuarioService.getUser();

  constructor(private readonly usuarioService: UsuarioService, private readonly router: Router) { }

  logout(){
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
