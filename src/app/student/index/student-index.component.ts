import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

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

  delete(student) {
    this.service.delete(student).subscribe(data => this.remove(data, student));
  }

  remove(response, student) {
    if (response.message == 'success') {
      M.toast({html: 'Note deleted!'})
      let index = this.students.indexOf(student);
      this.students.splice(index, 1);
    } else {
      M.toast({html: 'Unable to delete. Try again.'})
    }
  }
}
