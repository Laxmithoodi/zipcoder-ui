import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { environment } from '../../environments/environment';

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

  constructor() {}

  ngOnInit() {
  }

  getRandomString(){
    return uuid();
  }
}
