import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from '../shared/field-base';
// This is a comment for the new branch.
@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-address.component.html'
})
export class DynamicFormAddressComponent {
  @Input() field: FieldBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }

}
