import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  endpoint = 'search';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  // Obtain a list of all addresses matching query.
  getAddresses(form: any): Observable<any> {
    return this.http.get(`http://localhost:3000/${this.endpoint}`,
      {
        params:
          {
            street: form.streetOne,
            country: form.country
          }
      });
  }

}
