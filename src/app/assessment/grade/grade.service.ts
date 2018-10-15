import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './../../api/api.service';
import { Grade } from './grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  readonly RESOURCE_NAME = 'grades';

  constructor(private api: ApiService<Grade>) { }

  get(id): Observable<Grade> {
    return this.api.getOne(this.RESOURCE_NAME, id);
  }

  create(grade): Observable<Grade> {
    return this.api.post(this.RESOURCE_NAME, grade);
  }

  update(grade) {
    return this.api.update(this.RESOURCE_NAME, grade);
  }
}
