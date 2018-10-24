import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { User } from './current-user-profile/user';

import * as M from "materialize-css/dist/js/materialize";

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

  constructor(public auth: AuthService) {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelector('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }

  ngDoCheck() {
    this.isAuthenticated = this.auth.isAuthenticated();
    this.user = new User(this.auth.getUserName(), !this.auth.isStudent());
    this.isStaff = this.isAuthenticated && this.auth.isStaff();
  }


}
