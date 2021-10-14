import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private readonly httpCliente: HttpClient
    ) { }

  Autheticate(user: string, password: string): Observable<any>
  {
    return this.httpCliente.post('http://localhost:3000/user/login',
    {
      userName: user,
      password
    });
  }
}
