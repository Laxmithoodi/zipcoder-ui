import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './../api/api.service';
import { Submission } from './submission';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  readonly RESOURCE_NAME = 'submissions';

  constructor(private api: ApiService<Submission>) { }

  getAll(): Observable<Submission[]> {
    return this.api.getAll(this.RESOURCE_NAME);
  }

  get(id): Observable<Submission> {
    if (id) {
      return this.api.getOne(this.RESOURCE_NAME, id);
    } else {
      return new Observable((observer) => {
        observer.next(new Submission());
      });
    }
  }

  create(submission): Observable<Submission> {
    return this.api.post(this.RESOURCE_NAME, submission);
  }

  update(submission) {
    return this.api.update(this.RESOURCE_NAME, submission);
  }

  delete(submission) {
    return this.api.delete(this.RESOURCE_NAME, submission);
  }
}
