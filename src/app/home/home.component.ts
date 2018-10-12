import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { environment } from '../../environments/environment';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomString: string = uuid();
  host: string = environment.host;
  google_client: string = environment.google_client;
  github_client: string = environment.github_client;

  constructor(private auth: AuthService,
              private router: Router) {}

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      if (this.auth.isStudent()) {
        this.router.navigate(['/profile']);
      } else {
        this.router.navigate(['/students'])
      }
    }
  }

  getRandomString(){
    return uuid();
  }
}
