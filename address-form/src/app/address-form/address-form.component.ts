import { Component } from '@angular/core';
import {FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';
import { AddressService } from '../address.service';
import {Observable} from "rxjs";

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
  countryList: Country[];
  searchResults: any;

  addressForm = this.formBuilder.group({
    streetOne: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[a-zA-Z]+$')]],
    streetTwo: ['', [Validators.pattern('^[a-zA-Z]+$')]],
    town: [''],
    city: [''],
    region: [''],
    postalCode: [''],
    country: ['']
  });

  constructor(private formBuilder: FormBuilder, private api: AddressService) {
    this.countryList = [
      {id: 1, name: 'USA'},
      {id: 2, name: 'Canada'},
      {id: 3, name: 'Japan'}
    ];
  }


  onSubmit(data) {
    this.api.getAddresses(data).subscribe(resp => {
      this.searchResults = resp;
    });
    console.log(this.searchResults);
  }
}
