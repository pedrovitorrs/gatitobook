import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private readonly tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodingJWT();
    }
  }

  private decodingJWT() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as Usuario;

    this.usuarioSubject.next(user);
  }

  getUser() {
    return this.usuarioSubject.asObservable();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodingJWT();
  }

  logout(){
    this.tokenService.removeToken();
    this.usuarioSubject.next({});
  }

  isLogged(){
    return this.tokenService.hasToken();
  }
}
