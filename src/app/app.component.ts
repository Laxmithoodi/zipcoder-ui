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

  constructor(public auth: AuthService) {
    this.user = new User(this.auth.getUserName(), !this.auth.isStudent())
  }

  isAuthenticated(){
    return this.auth.isAuthenticated();
  }

}
