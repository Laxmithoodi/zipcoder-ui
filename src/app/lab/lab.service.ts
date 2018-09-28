import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Lab } from './lab';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor() { }

  getAll(): Observable<Array<Lab>> {
    return new Observable((observer) => {
      observer.next([new Lab("lab1-url", "lab1"), new Lab("lab2-url", "lab2")]);
    });
  }

  get(id): Observable<Lab> {
    if (id) {
      return new Observable((observer) => {
        observer.next(new Lab("lab1-url", "lab1"));
      });
    } else {
      return new Observable((observer) => {
        observer.next(new Lab());
      });
    }
  }

  create(lab) {
    console.log(lab);
  }
}
