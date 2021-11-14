import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(
    private readonly httpCliente: HttpClient
    ) { }

  CreateUser(novoUsuario: NovoUsuario): Observable<any>
  {
    return this.httpCliente.post('http://localhost:3000/user/signup',
    {
      novoUsuario
    });
  }
}
