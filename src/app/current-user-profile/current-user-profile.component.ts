import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from './../student/student';
import { StudentService } from './../student/student.service';
import { AuthService } from './../auth/auth.service';
import { Lab } from './../lab/lab';

@Component({
  selector: 'current-user-profile',
  templateUrl: 'current-user-profile.component.html',
  styleUrls: []
})
export class CurrentUserProfileComponent implements OnInit {

  student: Student = new Student();
  id: number;
  labs: Lab[] = [];

  constructor(private auth: AuthService, private service: StudentService) {
    this.id = auth.getStudentId();
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => this.student = data);
    this.service.getAssignments(this.id).subscribe(data => this.labs = data);
  }

  getNotCompleted(labs) {
    console.log(labs);
    return labs.filter(lab => lab['submissions'].length == 0);
  }

  getCompleted(labs){
    return labs.filter(lab => lab['submissions'].length > 0);
  }
}
