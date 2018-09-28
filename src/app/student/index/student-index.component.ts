import { Component, OnInit } from '@angular/core';

import { Student } from './../student';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.scss']
})
export class StudentIndexComponent implements OnInit {

  students: Array<Student>;

  constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.students = data);
  }

}
