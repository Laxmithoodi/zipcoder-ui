import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  message: string;

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.auth.getUser(this.route.snapshot.params['provider'], this.route.snapshot.queryParams)
             .subscribe(result => this.handleSuccessfulLogin(result),
                        error => this.handleError(error));
  }

  handleSuccessfulLogin(authResult) {
    this.auth.setSession(authResult);

    if (this.auth.isStudent()) {
      this.router.navigate(['/profile'])
    } else {
      this.router.navigate(['/admin/students'])
    }
  }

  handleError(error){
    this.auth.logout();
    this.message = error.error;
  }
}
