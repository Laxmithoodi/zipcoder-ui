import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from './../student/student';
import { StudentService } from './../student/student.service';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'current-user-profile',
  templateUrl: './../student/show/student-show.component.html',
  styleUrls: ['./../student/show/student-show.component.scss']
})
export class CurrentUserProfileComponent implements OnInit {

  student: Student = new Student();
  id: number;

  constructor(private auth: AuthService, private service: StudentService) {
    this.id = auth.getStudentId();
  }

  ngOnInit() {
    console.log(this.auth.getUserName());
    this.service.get(this.id).subscribe(data => this.student = data);
  }
}
