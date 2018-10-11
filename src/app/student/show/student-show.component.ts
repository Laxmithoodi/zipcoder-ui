import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from './../student';
import { StudentService } from './../student.service';
import { Lab } from './../../lab/lab';
import { Note } from './../../note/note';
import { Assessment } from './../../assessment/assessment';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.scss']
})
export class StudentShowComponent implements OnInit {

  student: Student = new Student();
  id: number;
  labs: Lab[] = [];
  notes: Note[] = [];
  assessments: Assessment[] = [];

  constructor(private route: ActivatedRoute, private service: StudentService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => this.student = data);
    this.service.getAssignments(this.id).subscribe(data => this.labs = data);
    this.service.getNotes(this.id).subscribe(data => console.log(data));
    this.service.getAssessments(this.id).subscribe(data => this.assessments = data);

    document.addEventListener('DOMContentLoaded', () => {
      let elems = document.querySelectorAll('.tabs');
      M.Tabs.init(elems, {});
    });
  }

  getNotCompleted(labs) {
    return labs.filter(lab => lab['submissions'].length == 0);
  }

  getCompleted(labs){
    return labs.filter(lab => lab['submissions'].length > 0);
  }
}
