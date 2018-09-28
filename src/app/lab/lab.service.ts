import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ApiService } from './../api/api.service';
import { Lab } from './lab';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  readonly RESOURCE_NAME = 'labs';

  constructor(private api: ApiService<Lab>, private router: Router) { }

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

  create(lab) {
    this.api.post(this.RESOURCE_NAME, lab).subscribe(console.log);
    this.router.navigate(['/' + this.RESOURCE_NAME]);
  }
}
