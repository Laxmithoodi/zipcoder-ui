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

  constructor(private service: LabService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.labs = data);
  }

  delete(lab) {
    this.service.delete(lab).subscribe(data => this.remove(data, lab));
  }

  assign(lab) {
    lab.assigned_date = new Date();
    this.service.assign(lab);
  }

  remove(response, lab) {
    if (response.message == 'success') {
      M.toast({html: 'Lab deleted!'})
      let index = this.labs.indexOf(lab);
      this.labs.splice(index, 1);
    } else {
      M.toast({html: 'Unable to delete. Try again.'})
    }
  }
}
