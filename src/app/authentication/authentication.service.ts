import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private readonly httpCliente: HttpClient,
    private readonly usuarioService: UsuarioService
  ) {}

  Autheticate(user: string, password: string): Observable<HttpResponse<any>> {
    return this.httpCliente
      .post(
        'http://localhost:3000/user/login',
        {
          userName: user,
          password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const authToken = response.headers.get('x-access-token') ?? '';
          this.usuarioService.setToken(authToken);
        })
      );
  }
}
