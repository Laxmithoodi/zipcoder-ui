import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Lab } from './../lab';
import { LabService } from './../lab.service';

@Component({
  selector: 'app-lab-show',
  templateUrl: './lab-show.component.html',
  styleUrls: ['./lab-show.component.scss']
})
export class LabShowComponent implements OnInit {
  lab: Lab;
  id: number;

  constructor(private route: ActivatedRoute, private service: LabService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => this.lab = data);
  }
}
