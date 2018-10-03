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
  lab: Lab = {};
  id: number;
  loading: boolean = false;
  assigned_date = new Date();

  constructor(private route: ActivatedRoute, private service: LabService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => {
      // formated_assigned_date = new Date(data.)
      this.lab = data
    });
  }

  submit(){
    this.loading = true;
    console.log(this.lab);
    console.log(this.lab.assigned_date)

    this.lab.assigned_date = (new Date(this.assigned_date)).toISOString();
    this.lab.due_date = (new Date(this.due_date)).toISOString();
    if (this.id) {
      this.service.update(this.lab).subscribe(data => this.router.navigate(['/labs']));
    } else {
      this.service.create(this.lab).subscribe(data => this.router.navigate(['/labs']));
    }
  }

}
