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

/*
map aka konventere det til orm aka et element inde i element.service.ts
element inde i angular class
from json to element objekter

+ læs op på decorators 
https://codecraft.tv/courses/angular/es6-typescript/decorators/
husk det skal være angular typescript <3
*/