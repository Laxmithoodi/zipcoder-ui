import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Note } from './../note';
import { NoteService } from './../note.service';

import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html'
})
export class NoteFormComponent implements OnInit {
  note: Note = new Note();
  id: number;
  loading: boolean = false;
  assigned_date = new Date();

  constructor(private route: ActivatedRoute, private service: NoteService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.get(this.id).subscribe(data => {
      // formated_assigned_date = new Date(data.)
      this.note = data
    });
  }

  ngAfterViewInit() {
    let form  = this;
    document.addEventListener('DOMContentLoaded', () => {
      let elems = document.querySelectorAll('.datepicker');
      let options = {autoClose: true, onSelect: function(date) {form.note[this.el.id] = date} };
      let instances = M.Datepicker.init(elems, options);
    });
  }

  submit(){
    this.loading = true;
    if (this.id) {
      this.service.update(this.note).subscribe(data => this.router.navigate(['/notes']));
    } else {
      this.service.create(this.note).subscribe(data => this.router.navigate(['/notes']));
    }
  }

}
