import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";

export class CustomValidator{

    static numeric(control: AbstractControl) {
      let val = control.value;
      if (val === null || val === '') return null;
      if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };
      return null;
    }


    static phoneNumber(control: AbstractControl): ValidationErrors | null {
      const val = control.value;
      if (val === null || val === '') return null;
      if (!/^\d{10}$/.test(val)) {
        return { 'invalidPhoneNumber': true };
      }
      return null;
    }

  }