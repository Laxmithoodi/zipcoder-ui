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
  isInstructor: boolean = false;

  constructor(public auth: AuthService) {}

  ngDoCheck() {
    this.user = new User(this.auth.getUserName(), !this.auth.isStudent());
    this.isInstructor = this.auth.isAuthenticated() && !this.auth.isStudent();
  }
}
