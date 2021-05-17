import { Injectable } from '@angular/core';

import { DropdownField} from './shared/field-dropdown';
import { TextboxField } from './shared/field-textbox';
import { FieldBase } from './shared/field-base';
import { of } from 'rxjs';

@Injectable()
export class FieldService {

  // TODO: get from a remote source of question metadata
  getFields() {

    const fields: FieldBase<string>[] = [

      new DropdownField({
        key: 'country',
        label: 'Country',
        options: [
          {key: 'usa',  value: 'USA'},
          {key: 'ca',  value: 'Canada'},
          {key: 'uk',   value: 'United Kingdom'},
          {key: 'ci', value: 'China'}
        ],
        order: 5
      }),

      new TextboxField({
        key: 'address_one',
        label: 'Address',
        required: true,
        order: 1
      }),

      new TextboxField({
        key: 'city',
        label: 'City',
        type: 'string',
        order: 2
      }),

      new TextboxField({
        key: 'state',
        label: 'State',
        type: 'string',
        order: 3
      }),

      new TextboxField({
        key: 'postal',
        label: 'Postal/Zip Code',
        type: 'number',
        order: 4
      })
    ];

    return of(fields.sort((a, b) => a.order - b.order));
  }
}
