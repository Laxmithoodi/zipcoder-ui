import { Component, OnInit } from '@angular/core';
import { Submission } from './../submission';
import { SubmissionService } from './../submission.service';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-submission-index',
  templateUrl: './submission-index.component.html'
})
export class SubmissionIndexComponent implements OnInit {
  submissions: Submission[];

  constructor(private service: SubmissionService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.submissions = data);
  }

  delete(submission) {
    this.service.delete(submission).subscribe(data => this.remove(data, submission));
  }

  remove(response, submission) {
    if (response.message == 'success') {
      M.toast({html: 'Submission deleted!'})
      let index = this.submissions.indexOf(submission);
      this.submissions.splice(index, 1);
    } else {
      M.toast({html: 'Unable to delete. Try again.'})
    }
  }
}
