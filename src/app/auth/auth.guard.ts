import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.checkLogin();
  }

  checkLogin(): boolean {
    console.log("is isAuthenticated" + this.auth.isAuthenticated());
    console.log("staff " + this.auth.isStaff());
    if (this.auth.isAuthenticated() && this.auth.isStaff()) {
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigate(['/']);
    return false;
  }
}
