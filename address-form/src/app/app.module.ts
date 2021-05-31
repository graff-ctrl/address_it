import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressService } from './address.service';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule,
            FormsModule, HttpClientModule],
  declarations: [ AppComponent, AddressFormComponent ],
  bootstrap: [ AppComponent ],
  providers: [ AddressService ]
})
export class AppModule { }
