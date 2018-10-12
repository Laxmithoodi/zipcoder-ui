import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Note } from './../note';
import { NoteService } from './../note.service';
import { Student } from './../../student/student';

import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  @Input() note: Note = new Note();
  @Input() student_id: number;
  id: number;
  loading: boolean = false;


  constructor(private route: ActivatedRoute, private service: NoteService, private router: Router) {
    this.student_id = this.route.snapshot.params['student_id'];
    if (this.student_id) {
      this.id = this.route.snapshot.params['id'];
    }
  }

  ngOnInit() {
    if (this.id) {
      this.service.get(this.student_id, this.id).subscribe(data => {
        this.note = data;
      });
    }
  }

  submit(){
    this.loading = true;
    if (this.id) {
      this.service.update(this.student_id, this.note).subscribe(d => location.reload());
    } else {
      this.service.create(this.student_id, this.note).subscribe(d => location.reload());
    }
  }
}
