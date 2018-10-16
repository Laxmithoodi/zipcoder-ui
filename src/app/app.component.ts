import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { User } from './current-user-profile/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // username: string = '';
  user: User;
  isStaff: boolean = false;
  isAuthenticated = false;

  constructor(public auth: AuthService) {}

  ngDoCheck() {
    this.isAuthenticated = this.auth.isAuthenticated();
    this.user = new User(this.auth.getUserName(), !this.auth.isStudent());
    this.isStaff = this.isAuthenticated && this.auth.isStaff();
  }
}
