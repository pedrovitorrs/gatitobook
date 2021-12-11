import { AbstractControl, Validators } from '@angular/forms';

export default class ValidForm {
  static minusculoValidator(control: AbstractControl) {
    const value = control.value as string;

    return value !== value.toLowerCase() ? {minusculo : true} : null;
  }
}
