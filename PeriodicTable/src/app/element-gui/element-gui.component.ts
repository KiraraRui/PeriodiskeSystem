import { Component, OnInit, Input } from '@angular/core';
import { Element } from '../element';

@Component({
  selector: 'app-element-gui',
  templateUrl: './element-gui.component.html',
  styleUrls: ['./element-gui.component.css']
})
export class ElementGuiComponent implements OnInit {
  @Input('element') elementInput: Element;

  constructor() { }

  ngOnInit(): void {
  }

}
