import { AbstractControl, FormGroup, Validators } from '@angular/forms';

export default class ValidUserPassword {
  static usuarioSenhaIguaisValidator(formGroup: FormGroup) {
    const userName = formGroup.get('userName')?.value ?? ''
    const password = formGroup.get('password')?.value ?? ''

    return userName !== password ? null : { senhaIgualUser: true};
  }
}
