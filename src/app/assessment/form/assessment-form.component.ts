import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Assessment } from './../assessment';
import { AssessmentService } from './../assessment.service';

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {
  assessment: Assessment;
  id: number;
  loading: boolean = false;
  levels: ['Exam', 'Quiz', 'Practice']

  constructor(private route: ActivatedRoute, private service: AssessmentService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => this.assessment = data);
  }

  submit(){
    this.loading = true;
    this.service.create(this.assessment).subscribe(data => this.router.navigate(['/assessments']));
  }

}
