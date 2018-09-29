import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    console.log('getting user name ' + this.auth.getUserName());
    this.username = this.auth.getUserName();
  }
}
