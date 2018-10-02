import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Lab } from './../lab';
import { LabService } from './../lab.service';

import { Student } from './../../student/student';

@Component({
  selector: 'app-lab-show',
  templateUrl: './lab-show.component.html',
  styleUrls: ['./lab-show.component.scss']
})
export class LabShowComponent implements OnInit {
  lab: Lab = new Lab();
  students: Student[] = [];

  constructor(private route: ActivatedRoute, private service: LabService) {
    this.lab.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.lab.id).subscribe(data => this.lab = data);
  }
}
