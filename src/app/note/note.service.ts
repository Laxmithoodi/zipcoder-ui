import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './../api/api.service';
import { Note } from './note';
import { Student } from './../student/student';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  readonly RESOURCE_NAME = 'notes';

  constructor(private api: ApiService<Note>) { }

  getAll(): Observable<Note[]> {
    return this.api.getAll(this.RESOURCE_NAME);
  }

  get(id): Observable<Note> {
    if (id) {
      return this.api.getOne(this.RESOURCE_NAME, id);
    } else {
      return new Observable((observer) => {
        observer.next(new Note());
      });
    }
  }

  create(note): Observable<Note> {
    return this.api.post(this.RESOURCE_NAME, note);
  }

  update(note) {
    return this.api.update(this.RESOURCE_NAME, note);
  }

  delete(note) {
    return this.api.delete(this.RESOURCE_NAME, note.id);
  }
}
