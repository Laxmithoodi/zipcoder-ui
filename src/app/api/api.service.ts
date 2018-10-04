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

  post(resource, data): Observable<T> {
    return this.http.post<T>(this.API_URI + resource, data, this.getHeaders());
  }

  getAll(resource): Observable<T[]> {
    return this.http.get<T[]>(this.API_URI + resource, this.getHeaders());
  }

  getOne(resource, id): Observable<T> {
    return this.http.get<T>(this.API_URI + resource + '/' + id, this.getHeaders());
  }

  get(path): any {
    return this.http.get(this.API_URI + path, this.getHeaders())
  }

  update(resource, data) {
    return this.http.put(this.API_URI + resource + '/' + data['id'], data, this.getHeaders());
  }

  delete(resource, model) {
    return this.http.delete(this.API_URI + resource + '/' + model.id, this.getHeaders())
  }

  getHeaders(){
    return {headers: {token: this.auth.getAccessToken()}};
  }
}
