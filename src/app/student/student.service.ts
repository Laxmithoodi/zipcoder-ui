import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getAll(): Observable<Array<Student>> {
    return new Observable((observer) => {
      observer.next([new Student({name: 'Zoe'}), new Student({name: 'Zane'})]);
    });
  }

  get(id): Observable<Student> {
    if (id) {
      return new Observable((observer) => {
        observer.next(new Student({name: 'Zack'}));
      });
    } else {
      return new Observable((observer) => {
        observer.next(new Student());
      });
    }
  }

  create(student) {
    console.log(student);
  }
}
