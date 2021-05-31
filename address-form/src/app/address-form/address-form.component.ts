import { Component } from '@angular/core';
import {FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';
import {AddressService} from '../address.service';
import { Address } from '../../model/Address';

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
  listAddresses: Address[];

  addressForm = this.formBuilder.group({
    streetOne: [''],
    streetTwo: [''],
    town: [''],
    city: [''],
    region: [''],
    postalCode: [''],
    country: ['']
  });

  constructor(private $list: AddressService, private formBuilder: FormBuilder) {

     this.countryList = [
      {id: 1, name: 'USA'},
      {id: 2, name: 'Canada'},
      {id: 3, name: 'Japan'}
    ];
  }


  onSubmit() {
    this.$list.getaddresses(this.addressForm).subscribe(
      data =>
      {
        this.listAddresses = data;
      }
    );
    console.log(this.addressForm.value);
  }
}


