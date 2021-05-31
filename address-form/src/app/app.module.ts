import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressFormComponent } from './address-form/address-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { AddressService} from './address.service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule, FormsModule],
  declarations: [ AppComponent, AddressFormComponent ],
  bootstrap: [ AppComponent ],
  providers: [ AddressService ]
})
export class AppModule { }
