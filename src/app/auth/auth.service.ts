import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static readonly ACCESS_TOKEN_KEY: string = 'zcw-access-token';
  static readonly USER_NAME_KEY: string = 'zcw-user-name';
  static readonly STAFF_KEY: string = 'zcw-is-staff';
  static readonly STUDENT_ID_KEY: string = 'zcw-student-id';

  constructor(private router: Router, private http: HttpClient) { }

  getUser(provider, data) {
    const headers = new HttpHeaders()
                    .append('Content-Type', 'application/json')
                    .append('code', data['code'])
                    .append('state', data['state'])
                    .append('redirect_uri', `https://portal.zipcode.rocks/auth/${provider}/callback`);

    return this.http.post('https://ersatz-aroura.herokuapp.com/auth/' + provider, {}, {headers: headers})
  }

  public setSession(authResult): void {
    // Set the time that the access token will expire at
    // const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem(AuthService.ACCESS_TOKEN_KEY, authResult.access_token);

    let student = authResult['student'];

    if (student) {
      localStorage.setItem(AuthService.USER_NAME_KEY, student.name);
      localStorage.setItem(AuthService.STUDENT_ID_KEY, student.id);
    } else {
      localStorage.setItem(AuthService.USER_NAME_KEY, authResult.person.email);
    }
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem(AuthService.ACCESS_TOKEN_KEY);
    localStorage.removeItem(AuthService.USER_NAME_KEY)
    localStorage.removeItem(AuthService.STUDENT_ID_KEY);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem(AuthService.ACCESS_TOKEN_KEY) != null
  }

  public getAccessToken(): string{
    return localStorage.getItem(AuthService.ACCESS_TOKEN_KEY)
  }

  public getUserName(): string{
    return localStorage.getItem(AuthService.USER_NAME_KEY)
  }

  public isStudent(): boolean {
    return this.getStudentId() > 0;
  }

  public getStudentId(): number {
    let id = localStorage.getItem(AuthService.STUDENT_ID_KEY);
    return id == null ? 0 : parseInt(id);
  }
}
