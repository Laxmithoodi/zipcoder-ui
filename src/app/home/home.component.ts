import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomString: string = uuid();

  constructor() { }

  ngOnInit() {
  }

  getRandomString(){
    return uuid();
  }
}
