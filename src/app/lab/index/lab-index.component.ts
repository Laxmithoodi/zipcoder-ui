import { Component, OnInit } from '@angular/core';
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
    this.service.delete(lab);
  }

  assign(lab) {
    this.service.assign(lab);
    console.log('assigned');
  }
}
