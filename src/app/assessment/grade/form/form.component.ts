import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from './../grade';
import { GradeService } from './../grade.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class GradeFormComponent implements OnInit {

  grade: Grade = new Grade();
  id: number;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private service: GradeService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => this.grade = data);
  }

  submit(){
    this.loading = true;
    let redirectUrl = '/assessments/' + this.grade.assessment_id;
    this.service.update(this.grade).subscribe(data => this.router.navigate([redirectUrl]));
  }

}
