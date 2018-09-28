import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Lab } from './../lab';
import { LabService } from './../lab.service';

@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.scss']
})
export class LabFormComponent implements OnInit {
  lab: Lab;
  id: number;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private service: LabService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => this.lab = data);
  }

  submit(){
    this.loading = true;
    this.service.create(this.lab).subscribe(data => this.router.navigate(['/labs']));
  }

}
