import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Submission } from './../submission';
import { SubmissionService } from './../submission.service';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html'
})
export class SubmissionFormComponent implements OnInit {
  submission: Submission = new Submission();
  id: number;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private service: SubmissionService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => this.submission = data);
  }

  submit(){
    this.loading = true;
    this.service.create(this.submission).subscribe(data => this.router.navigate(['/submissions']));
  }

}
