import { Component, OnInit } from '@angular/core';
import { Assessment } from './../assessment';
import { AssessmentService } from './../assessment.service';

@Component({
  selector: 'app-assessment-index',
  templateUrl: './assessment-index.component.html',
  styleUrls: ['./assessment-index.component.scss']
})
export class AssessmentIndexComponent implements OnInit {
  assessments: Array<Assessment>;

  constructor(private service: AssessmentService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.assessments = data);
  }

  delete(assessment) {
    this.service.delete(assessment).subscribe(console.log);
  }

  assign(assessment) {
    assessment.assigned_date = new Date();
    // this.service.assign(assessment);
  }
}
