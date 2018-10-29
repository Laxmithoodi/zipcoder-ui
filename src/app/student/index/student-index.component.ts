import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

import { Student } from './../student';
import { StudentService } from './../student.service';

import { Assessment } from './../../assessment/assessment';
import { AssessmentService } from './../../assessment/assessment.service';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.scss']
})
export class StudentIndexComponent implements OnInit {

  students: Student[] = [];
  assessments: Assessment[] = [];

  constructor(private service: StudentService, private assessmentService: AssessmentService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.students = data);
    this.assessmentService.getAll().subscribe(data => this.assessments = data);
  }

  delete(student) {
    this.service.delete(student).subscribe(data => this.remove(data, student));
  }

  remove(response, student) {
    if (response.message == 'success') {
      M.toast({html: 'Student deleted!'})
      let index = this.students.indexOf(student);
      this.students.splice(index, 1);
    } else {
      M.toast({html: 'Unable to delete. Try again.'})
    }
  }

  getGradeForAssessment(assessment, grades){
    let grade = grades.find(function(grade) { return grade.assessment_id == assessment.id});
    return (grade) ? grade.grade : -1;
  }
}
