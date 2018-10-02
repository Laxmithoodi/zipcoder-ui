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
  students: Student[] = [];

  constructor(private route: ActivatedRoute, private service: AssessmentService) {
    this.assessment.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.assessment.id).subscribe(data => this.assessment = data);
  }
}
