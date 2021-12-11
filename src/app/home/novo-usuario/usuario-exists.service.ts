import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExistsService {
  constructor(private readonly novoUsuarioService: NovoUsuarioService) {}

  usuarioExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nome) => this.novoUsuarioService.VerifyUser(nome)),
        map((exists) => exists ? {usuarioExistente: true} : null),
        first()
      );
    };
  }
}
