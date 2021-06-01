import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressFormComponent} from './address-form/address-form.component';

export type SearchType = 'address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: SearchType = 'address';

}
