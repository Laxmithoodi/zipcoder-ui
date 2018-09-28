import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from './../student';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.scss']
})
export class StudentShowComponent implements OnInit {

  student: Student = new Student();
  id: number;

  constructor(private route: ActivatedRoute, private service: StudentService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => this.student = data);
  }

}
