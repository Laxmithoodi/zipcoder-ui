import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './../api/api.service';
import { Student } from './student';
import { Lab } from './../lab/lab';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly RESOURCE_NAME = 'students';

  constructor(private api: ApiService<Student>) { }

  getAll(): Observable<Student[]> {
    return this.api.getAll(this.RESOURCE_NAME);
  }

  get(id): Observable<Student> {
    if (id) {
      return this.api.getOne(this.RESOURCE_NAME, id);
    } else {
      return new Observable((observer) => {
        observer.next(new Student());
      });
    }
  }

  create(student): Observable<Student> {
    return this.api.post(this.RESOURCE_NAME, student);
  }

  getAssignments(student_id): Observable<Lab[]> {
    return this.api.get(this.RESOURCE_NAME + '/' + student_id + '/assignments');
  }
}
