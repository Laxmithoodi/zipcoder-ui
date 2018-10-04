import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './../api/api.service';
import { Lab } from './lab';
import { Student } from './../student/student';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  readonly RESOURCE_NAME = 'labs';

  constructor(private api: ApiService<Lab>) { }

  getAll(): Observable<Lab[]> {
    return this.api.getAll(this.RESOURCE_NAME);
  }

  get(id): Observable<Lab> {
    if (id) {
      return this.api.getOne(this.RESOURCE_NAME, id);
    } else {
      return new Observable((observer) => {
        observer.next(new Lab());
      });
    }
  }

  create(lab): Observable<Lab> {
    return this.api.post(this.RESOURCE_NAME, lab);
  }

  update(lab) {
    return this.api.update(this.RESOURCE_NAME, lab);
  }

  delete(lab) {
    return this.api.delete(this.RESOURCE_NAME, lab.id);
  }

  assign(lab) {
    return this.api.post('students/assign/' + lab.id, {}).subscribe(console.log)
  }

  getStudents(lab_id) {
    return this.api.get(`${this.RESOURCE_NAME}/${lab_id}/students`);
  }
}
