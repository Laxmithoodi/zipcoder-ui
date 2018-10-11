import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './../api/api.service';
import { Note } from './note';
import { Student } from './../student/student';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  readonly RESOURCE_NAME = 'comments';

  constructor(private api: ApiService<Note>) { }

  getAll(student_id): Observable<Note[]> {
    return this.api.getAll(this.formatPath(student_id));
  }

  get(student_id, id): Observable<Note> {
    if (id) {
      return this.api.getOne(this.formatPath(student_id), id);
    } else {
      return new Observable((observer) => {
        observer.next(new Note());
      });
    }
  }

  create(student_id, note): Observable<Note> {
    return this.api.post(this.formatPath(student_id), {body: note.body});
  }

  update(student_id, note) {
    return this.api.update(this.formatPath(student_id), {body: note.body, id: note.id});
  }

  delete(student_id, note) {
    console.log(this.formatPath(student_id));
    console.log(note.id);
    return this.api.delete(this.formatPath(student_id), note);
  }

  formatPath(student_id) {
    return `students/${student_id}/${this.RESOURCE_NAME}`;
  }
}
