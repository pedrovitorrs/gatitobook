import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExistsService } from './usuario-exists.service';
import ValidUserPassword from './ValidForm/user-Password.validator';
import ValidForm from './ValidForm/validForm.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioFormGroup!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly novoUsuarioService: NovoUsuarioService,
    private readonly usuarioExistenteService: UsuarioExistsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioFormGroup = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [ValidForm.minusculoValidator],
          [this.usuarioExistenteService.usuarioExists()],
        ],
        password: [''],
      },
      {
        Validators: [ValidUserPassword],
      }
    );
  }

  cadastrar() {
    console.log(this.novoUsuarioFormGroup.valid)
    if (!this.novoUsuarioFormGroup.valid) return;

    const novoUsuario = this.novoUsuarioFormGroup.getRawValue() as NovoUsuario;
    console.log(novoUsuario)
    this.novoUsuarioService.CreateUser(novoUsuario).subscribe(
      () => {
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
