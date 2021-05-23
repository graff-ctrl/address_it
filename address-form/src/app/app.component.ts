import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export type SearchType = 'address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: SearchType = 'address';

}
