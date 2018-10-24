import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

import { Lab } from './../lab';
import { LabService } from './../lab.service';

@Component({
  selector: 'app-lab-index',
  templateUrl: './lab-index.component.html',
  styleUrls: ['./lab-index.component.scss']
})
export class LabIndexComponent implements OnInit {
  labs: Array<Lab>;
  ascSubmissions: boolean = true;
  ascName: boolean = true;

  constructor(private service: LabService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.labs = data);
  }

  delete(lab) {
    this.service.delete(lab).subscribe(data => this.remove(data, lab));
  }

  assign(lab) {
    this.service.assign(lab).subscribe(response => this.handleAssigned(response, lab));
  }

  handleAssigned(response, lab) {
    if (response.message == 'success') {
      M.toast({html: lab.name + ' assigned!'})
      lab.assigned_date = new Date();
    } else {
      M.toast({html: 'Unable to assign. Try again.'})
    }
  }

  remove(response, lab) {
    if (response.message == 'success') {
      M.toast({html: lab.name + ' deleted!'})
      let index = this.labs.indexOf(lab);
      this.labs.splice(index, 1);
    } else {
      M.toast({html: 'Unable to delete. Try again.'})
    }
  }

  sortSubmission() {
    if (this.ascSubmissions) {
      this.labs.sort((lab1, lab2) => lab1.submissions.length - lab2.submissions.length);
      this.ascSubmissions = false;
    } else {
      this.labs.sort((lab1, lab2) => lab2.submissions.length - lab1.submissions.length);
      this.ascSubmissions = true;
    }
  }

  sortName(){
    console.log("sortname");
    if (this.ascName) {
      this.labs.sort((lab1, lab2) => lab1.name > lab2.name);
      this.ascName = false;
    } else {
      this.labs.sort((lab1, lab2) => lab2.name > lab1.name);
      this.ascName = true;
    }
  }
}
