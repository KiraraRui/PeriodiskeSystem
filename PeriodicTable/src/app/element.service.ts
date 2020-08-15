import { Injectable } from '@angular/core';
import { Element } from './element';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ElementService {
constructor(private httpClient: HttpClient) {
    console.log('elementService');
    this.MapData();
  }

  request;
  elements: Element[] = [];

  MapData(): void {
    console.log('mapdata')
    this.httpClient.get('https://neelpatel05.pythonanywhere.com/').subscribe(data=>{
      this.request = data;
      for (let index = 0; index < 118; index++) {
        let tempElement = new Element(
          this.request[index].name,
          this.request[index].phase,
          this.request[index].color,
          this.request[index].symbol,
          this.request[index].summary,
          this.request[index].category,
          this.request[index].apperarance,
          this.request[index].atomicMass,
          this.request[index].density,
          this.request[index].period,
          this.request[index].number,
          this.request[index].melt,
          this.request[index].boil
        )
        this.elements.push(tempElement);
        }  
      })
    }
  }

  //https://www.youtube.com/watch?v=zCdjVGqc3gk
  // it's aliiveeee :D