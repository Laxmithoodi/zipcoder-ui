import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.getUser(this.route.snapshot.params['provider'], this.route.snapshot.queryParams);
  }

}
