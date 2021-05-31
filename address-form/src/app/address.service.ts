import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';
import { from, Observable } from 'rxjs';
import {IAddressModelAngular} from '../model/IAddressModelAngular';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  endpoint = 'address';
  searchResults: any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  // Obtain a list of all addresses matching query.
  public getaddresses(term: any): Observable<any> {
    const parameters = new HttpParams().set('Street_Name', term.streetName);
    parameters.set('City_or_Town', term.municipality);
    parameters.set('Country', term.country);
    parameters.set('Postal_Area', term.postalCode);
    return this.http.get<IAddressModelAngular[]>(`${environment.apiUrl}/${this.endpoint}`, {params: parameters});
  }

  // Obtain single address
  getAddressById(addressId: number) {
    return this.http.get(`${environment.apiUrl}/${this.endpoint}/${addressId}`);
  }

}
