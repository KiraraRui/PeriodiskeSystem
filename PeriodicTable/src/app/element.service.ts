import { Injectable } from '@angular/core';
import * as data from '../assets/PeriodicTableData.json';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor() { 
    console.log(data);
  }
}
