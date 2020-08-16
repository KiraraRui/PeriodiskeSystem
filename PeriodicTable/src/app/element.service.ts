import { Injectable } from '@angular/core';
import { Element } from './element';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  constructor(private httpClient: HttpClient) {
    console.log('elementService');
    this.MapData();
  }

  request;
  elements: Element[] = [];

  MapData(): void {
    console.log('mapdata');
    this.httpClient.get('../assets/test.json').subscribe((data) => {
      this.request = data;
      for (let index = 0; index < 118; index++) {
        let tempElement = new Element(
          this.request[index].name,
          this.request[index].phase,
          this.request[index].color,
          this.request[index].symbol,
          this.request[index].summary,
          this.request[index].groupBlock,
          this.request[index].apperarance,
          this.request[index].atomicMass,
          this.request[index].density,
          this.request[index].period,
          this.request[index].atomicNumber,
          this.request[index].melt,
          this.request[index].boil,
          this.request[index].group
        );
        this.elements.push(tempElement);
      }
    });
  }
}

//https://www.youtube.com/watch?v=zCdjVGqc3gk
