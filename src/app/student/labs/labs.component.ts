import { Input, Component, OnInit } from '@angular/core';

import { Lab } from './../../lab/lab';

@Component({
  selector: 'app-student-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {
  @Input() labs: Lab[] = [];

  ngOnInit() {}

  getNotCompleted(labs) {
    return this.sortAssignment(labs.filter(lab => lab['submissions'].length == 0));
  }

  getCompleted(labs){
    return this.sortAssignment(labs.filter(lab => lab['submissions'].length > 0));
  }

  sortAssignment(data) {
    return data.sort((a, b) => this.timeInMilliSecond(a) - this.timeInMilliSecond(b));
  }

  timeInMilliSecond(assignment) {
    console.log((new Date(assignment.due_date)).getTime());
    return (new Date(assignment.due_date)).getTime();
  }
}
