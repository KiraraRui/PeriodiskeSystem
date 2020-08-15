import { Component, OnInit } from '@angular/core';
import { ElementService } from '../element.service';
import { Element } from '../element';

@Component({
  selector: 'app-periodic',
  templateUrl: './periodic.component.html',
  styleUrls: ['./periodic.component.css']
})
export class PeriodicComponent implements OnInit {

  elements : Element[];
  constructor(private elementService: ElementService) { 
  this.elements = elementService.elements;
  console.log(this.elements);
   }

  ngOnInit(): void {}

}
