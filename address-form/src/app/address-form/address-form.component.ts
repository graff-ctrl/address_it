import { Component } from '@angular/core';
import {FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';

interface Country {
  id: number;
  name: string;
}

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent{

  countries = new FormControl();
  isCountrySelected: boolean;
  countryList: Country[];

  addressForm = this.formBuilder.group({
    streetOne: [''],
    streetTwo: [''],
    town: [''],
    city: [''],
    region: [''],
    postalCode: [''],
    country: ['']
  });

  constructor(private formBuilder: FormBuilder) {

     this.countryList = [
      {id: 1, name: 'USA'},
      {id: 2, name: 'Canada'},
      {id: 3, name: 'Japan'}
    ];
  }

  selectInput(event) {
    let selected = event.target.value.name;
    if (selected == 'Canada'){
      this.isCountrySelected = true;
    } else {
      this.isCountrySelected = false;
    }
  }

  onSubmit() {
    console.log(this.addressForm.value);
  }
}


