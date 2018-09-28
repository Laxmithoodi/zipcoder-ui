import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  readonly API_URI = 'http://localhost:3000/'

  constructor(private auth: AuthService, private http: HttpClient) { }

  post(resource, data) {
    return this.http.post(this.API_URI + resource, data);
  }

  getAll(resource): Observable<T[]> {
    return this.http.get<T[]>(this.API_URI + resource);
  }

  getOne(resource, id): Observable<T> {
    return this.http.get<T>(this.API_URI + resource + '/' + id);
  }
}
