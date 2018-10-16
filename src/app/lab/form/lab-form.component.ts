import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Lab } from './../lab';
import { LabService } from './../lab.service';

import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.scss']
})
export class LabFormComponent implements OnInit {
  lab: Lab = new Lab();
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

  ngAfterViewInit() {
    let form  = this;
    document.addEventListener('DOMContentLoaded', () => {
      let elems = document.querySelectorAll('.datepicker');
      let options = {autoClose: true, onSelect: function(date) {form.lab[this.el.id] = date} };
      let instances = M.Datepicker.init(elems, options);
    });
  }

  submit(){
    this.loading = true;
    let redirectUrl = '/admin/labs'
    if (this.id) {
      this.service.update(this.lab).subscribe(data => this.router.navigate([redirectUrl]));
    } else {
      this.service.create(this.lab).subscribe(data => this.router.navigate([redirectUrl]));
    }
  }

}
