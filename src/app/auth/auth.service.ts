import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly ACCESS_TOKEN_KEY: string = 'zcw-access-token';
  readonly USER_NAME_KEY: string = 'zcw-user-name';

  constructor(private router: Router, private http: HttpClient) { }

  getUser(provider, data) {
    console.log(data);
    const headers = new HttpHeaders()
                    .append('Content-Type', 'application/json')
                    .append('code', data['code'])
                    .append('state', data['state'])
                    .append('redirect_uri', `http://localhost:4200/auth/${provider}/callback`);

    this.http.post('http://localhost:3000/auth/' + provider, {}, {headers: headers}).subscribe(this.setSession);
  }

  private setSession(authResult): void {
    console.log(authResult);
    // Set the time that the access token will expire at
    // const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem(this.ACCESS_TOKEN_KEY, authResult.accessToken);
    localStorage.setItem(this.USER_NAME_KEY, authResult.accessToken);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.USER_NAME_KEY)
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY) != null
  }

  public getAccessToken(): string{
    return localStorage.getItem(this.ACCESS_TOKEN_KEY)
  }

  public getUserName(): string{
    return localStorage.getItem(this.USER_NAME_KEY)
  }
}
