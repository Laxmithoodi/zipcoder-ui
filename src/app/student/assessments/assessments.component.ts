import { Component, Input, OnInit } from '@angular/core';

import { Assessment } from './../../assessment/assessment';

@Component({
  selector: 'app-student-assessments',
  templateUrl: './assessments.component.html'
})
export class AssessmentsComponent implements OnInit {

  @Input() assessments: Assessment[] = [];

  ngOnInit() {}

  formatGrade(assessment) {
    let score = assessment.grades[0] ? assessment.grades[0].grade : 0;
    let percent = Math.floor((score * 100)/assessment.max_score);

    return `${score}/${assessment.max_score} (${percent}%)`;
  }
}
