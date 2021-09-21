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
      {id: 1, name: 'United States'},
      {id: 2, name: 'Canada-  v1'},
      {id: 3, name: 'Japan'},
      {id: 4, name:'Argentina'},
      {id: 5, name:'Australia'},
      {id: 6, name:'Bangladesh'},
      {id: 7, name:'Belarus'},
      {id: 8, name:'Belgium'},
      {id: 9, name:'Brazil'},
      {id: 10, name:'Bulgaria'},
      {id: 11, name:'Colombia'},
      {id: 12, name:'Croatia'},
      {id: 13, name:'Czech Republic'},
      {id: 14, name:'Denmark'},
      {id: 15, name:'Estonia'},
      {id: 16, name:'Finland'},
      {id: 17, name:'France'},
      {id: 19, name:'Germany'},
      {id: 20, name:'Austria'},
      {id: 21, name:'China'},
      {id: 22, name:'Colombia'},
      {id: 23, name:'Croatia'},
      {id: 24, name:'Czech Republic'},
      {id: 25, name:'Denmark'},
      {id: 26, name:'Estonia'},
      {id: 27, name:'Finland'},
      {id: 28, name:'Greece'},
      {id: 29, name:'Hong Kong'},
      {id: 30, name:'Hungary'}, 
      {id: 31, name:'Iceland'}, 
      {id: 32, name:'India'}, 
      {id: 33, name:'Indonesia'},
      {id: 34, name:'Iran'},
      {id: 35, name:'Iraq'},
      {id: 36, name:'Ireland'},
      {id: 37, name:'Iran'},
      {id: 38, name:'Iraq'},
      {id: 39, name:'Ireland'},
      {id: 40, name:'Israel'},
      {id: 41, name:'Italy'},
      {id: 42, name:'Japan'},
      {id: 43, name:'Latvia'},
      {id: 44, name:'Macau'},
      {id: 45, name:'Malaysia'},
      {id: 46, name:'Mexico'},
      {id: 47, name:'Netherlands'},
      {id: 48, name:'New Zealand'},
      {id: 49, name:'Norway'},
      {id: 50, name:'Oman'},
      {id: 51, name:'Pakistan'},
      {id: 52, name:'Peru'},
      {id: 53, name:'Philippines'},
      {id: 54, name:'Poland'},
      {id: 55, name:'Portugal'},
      {id: 56, name:'Qatar'},
      {id: 57, name:'Romania'},
      {id: 58, name:'Russia'},
      {id: 59, name:'Saudi Arabia'},
      {id: 60, name:'Serbia'},
      {id: 61, name:'Singapore'},
      {id: 62, name:'Slovakia'},
      {id: 63, name:'South Korea'},
      {id: 64, name:'Spain'},
      {id: 65, name:'Taiwan'},
      {id: 66, name:'United Kingdom'},
      {id: 68, name:'Vietnam'}

    ];
  }

  get streetOne() {
    return this.addressForm.get('streetOne');
  }

  onSubmit(data) {
    this.api.getAddresses(data).subscribe(resp => {
      this.searchResults = resp;
    });
    console.log(this.searchResults);
  }
}
