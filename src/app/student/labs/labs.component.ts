import { Input, Component, OnInit } from '@angular/core';

import { Lab } from './../../lab/lab';

@Component({
  selector: 'app-student-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {
  @Input() labs: Lab[]: [];

  getNotCompleted(labs) {
    return labs.filter(lab => lab['submissions'].length == 0);
  }

  getCompleted(labs){
    return labs.filter(lab => lab['submissions'].length > 0);
  }
}
