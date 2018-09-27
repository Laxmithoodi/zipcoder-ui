import { Injectable } from '@angular/core';
import { Lab } from './lab';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor() { }

  getAll(){
    [new Lab("lab1-url", "lab1"), new Lab("lab2-url", "lab2")]
  }
}
