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
    this.username = this.auth.getUserName();
  }
}
