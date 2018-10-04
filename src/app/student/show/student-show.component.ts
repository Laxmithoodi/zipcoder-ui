import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from './../student';
import { StudentService } from './../student.service';
import { Lab } from './../../lab/lab';

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.scss']
})
export class StudentShowComponent implements OnInit {

  student: Student = new Student();
  id: number;
  labs: Lab[] = [];

  constructor(private route: ActivatedRoute, private service: StudentService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => this.student = data);
    this.service.getAssignments(this.id).subscribe(data => this.labs = data);
  }

  getNotCompleted(labs) {
    console.log(labs);
    return labs.filter(lab => lab['submissions'].length == 0);
  }

  getCompleted(labs){
    return labs.filter(lab => lab['submissions'].length > 0);
  }
}
