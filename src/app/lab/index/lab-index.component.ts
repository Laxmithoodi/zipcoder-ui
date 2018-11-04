import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

import { Lab } from './../lab';
import { LabService } from './../lab.service';

import { Comparator } from './../../helper/comparator';

@Component({
  selector: 'app-lab-index',
  templateUrl: './lab-index.component.html',
  styleUrls: ['./lab-index.component.scss']
})
export class LabIndexComponent implements OnInit {
  labs: Array<Lab>;
  ascSubmissions: boolean = false;
  ascName: boolean = false;

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
    Comparator.sortBySubmissions(this.labs, this.ascSubmissions);
    this.ascSubmissions = !this.ascSubmissions;
  }

  sortName(){
    Comparator.sortByName(this.labs, this.ascName);
    this.ascName = !this.ascName;
  }

}
