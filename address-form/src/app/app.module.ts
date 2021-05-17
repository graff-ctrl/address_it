import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormAddressComponent } from './dynamic-form-address/dynamic-form-address.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormAddressComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
