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
                    .append('redirect_uri', `http://localhost:4200/auth/${provider}/callback`);

    this.http.post('http://localhost:3000/auth/' + provider, {}, {headers: headers})
             .subscribe(result => this.setSession(result));
  }

  private setSession(authResult): void {
    console.log(authResult);
    // Set the time that the access token will expire at
    // const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem(AuthService.ACCESS_TOKEN_KEY, authResult.access_token);

    let student = authResult['student'];

    if (student) {
      localStorage.setItem(AuthService.USER_NAME_KEY, student.name);
      localStorage.setItem(AuthService.STUDENT_ID_KEY, student.id);
      this.router.navigate(['/profile'])
    } else {
      localStorage.setItem(AuthService.USER_NAME_KEY, authResult.person.email);
      this.router.navigate(['/students'])
    }
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem(AuthService.ACCESS_TOKEN_KEY);
    localStorage.removeItem(AuthService.USER_NAME_KEY)
    // Go back to the home route
    this.router.navigate(['/']);
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
    return this.getStudentId() != null;
  }

  public getStudentId(): number {
    let id = localStorage.getItem(AuthService.STUDENT_ID_KEY);
    return id == null ? 0 : parseInt(id);
  }
}
