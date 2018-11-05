import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Assessment } from './../assessment';
import { AssessmentService } from './../assessment.service';

import { Student } from './../../student/student';

@Component({
  selector: 'app-assessment-show',
  templateUrl: './assessment-show.component.html',
  styleUrls: ['./assessment-show.component.scss']
})
export class AssessmentShowComponent implements OnInit {
  assessment: Assessment = new Assessment();
  ascScore = false;
  notCompletedStudents: Student[] = [];
  completedStudents: Student[] = [];

  constructor(private route: ActivatedRoute, private service: AssessmentService) {
    this.assessment.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.assessment.id).subscribe(data => this.assessment = data);
    this.service.getStudents(this.assessment).subscribe(data => this.populateStudents(data, this));
  }

  populateStudents(data, obj) {
    obj.completedStudents = obj.getCompleted(data);
    obj.notCompletedStudents = obj.getNotCompleted(data);
  }

  getNotCompleted(students) {
    return students.filter(student => student['submissions'].length == 0);
  }

  getCompleted(students){
    return students.filter(student => student['submissions'].length > 0);
  }

  addGrade(student) {
    return this.service.addGrade(this.assessment, student).subscribe(data => this.updateStudentView(data, student));
  }

  updateStudentView(data, student) {
    student.grades.push(data);
  }


  sortScore(){
    if (this.ascScore) {
      this.completedStudents.sort((s1, s2) => s1.grades[0].grade - s2.grades[0].grade);
      this.ascScore = false;
    } else {
      this.completedStudents.sort((s1, s2) => s2.grades[0].grade - s1.grades[0].grade);
      this.ascScore = true;
    }
  }

  gradePercent(student) {
    return Math.floor((student.grades[0].grade * 100)/this.assessment.max_score);
  }

}
