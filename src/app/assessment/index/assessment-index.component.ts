import { Component, OnInit } from '@angular/core';
import { Assessment } from './../assessment';
import * as M from "materialize-css/dist/js/materialize";

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
    this.service.delete(assessment).subscribe(data => this.remove(data, assessment));
  }

  remove(response, assessment) {
    if (response.message == 'success') {
      M.toast({html: 'Assessment deleted!'})
      let index = this.assessments.indexOf(assessment);
      this.assessments.splice(index, 1);
    } else {
      M.toast({html: 'Unable to delete. Try again.'})
    }
  }
}
