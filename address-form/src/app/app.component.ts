import { Component } from '@angular/core';

import { FieldService } from './field.service';
import { FieldBase } from './shared/field-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Address Search Form</h2>
      <app-dynamic-form [fields]="fields$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [FieldService]
})
export class AppComponent {
  fields$: Observable<FieldBase<any>[]>;

  constructor(service: FieldService) {
    this.fields$ = service.getFields();
  }
}
