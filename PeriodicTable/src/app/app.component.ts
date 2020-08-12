import { Component } from '@angular/core';
import { ElementService } from './element.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeriodicTable';
  service : ElementService = new ElementService();
}
