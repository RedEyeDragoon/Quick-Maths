import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstnum = form.value[sourceOne];
      const secondnum = form.value[sourceTwo];

      if(firstnum + secondnum === parseInt(sum)){
        return null;
      }
      return { addition: true };
    }
  }
}