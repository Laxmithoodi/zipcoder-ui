import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    auth: AuthService,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authService.isAuthenticated() && this.authService.isStaff()) {
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigate(['/']);
    return false;
  }
}
