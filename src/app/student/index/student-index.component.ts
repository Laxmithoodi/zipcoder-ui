import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

import { Student } from './../student';
import { StudentService } from './../student.service';

import { Assessment } from './../../assessment/assessment';
import { AssessmentService } from './../../assessment/assessment.service';
import { LabService } from './../../lab/lab.service';

import { Comparator } from './../../helper/comparator';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.scss']
})
export class StudentIndexComponent implements OnInit {

  students: Student[] = [];
  assessments: Assessment[] = [];
  ascLab = false;
  ascAssessment = false;
  ascName = false;
  labCount = 0;

  constructor(private service: StudentService,
              private assessmentService: AssessmentService,
              private labService: LabService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.students = data);
    this.assessmentService.getAll().subscribe(data => this.assessments = data);
    this.labService.getAll().subscribe(data => this.labCount = this.getLabCount(data));
  }

  getLabCount(labs) {
    return labs.filter((lab) => lab.assigned_date).length;
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

  sortAssessment(assessment) {
    if (this.ascAssessment) {
      this.students.sort((s1, s2) => this.getGradeForAssessment(assessment, s1.grades) - this.getGradeForAssessment(assessment, s2.grades));
    } else {
      this.students.sort((s1, s2) => this.getGradeForAssessment(assessment, s2.grades) - this.getGradeForAssessment(assessment, s1.grades));
    }
    this.ascAssessment = !this.ascAssessment;
  }

  sortLab(){
    Comparator.sortBySubmissions(this.students, this.ascLab);
    this.ascLab = !this.ascLab;
  }

  sortName(){
    Comparator.sortByName(this.students, this.ascName);
    this.ascName = !this.ascName;
  }

  formatLabProgress(student) {
    return Math.floor((student.submissions.length/this.labCount) * 100) + "%" ;
  }
}
