import { Component, OnInit, Input } from '@angular/core';
import { Note } from './../note';
import { Student } from './../../student/student';
import { NoteService } from './../note.service';

import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-note-index',
  templateUrl: './note-index.component.html',
  styleUrls: ['./note-index.component.scss']
})
export class NoteIndexComponent implements OnInit {
  @Input() notes: Note[];
  @Input() student: Student;

  constructor(private service: NoteService) { }

  ngOnInit(){}

  delete(note) {
    console.log(note);
    this.service.delete(this.student.id, note).subscribe(data => this.remove(data, note));
  }

  remove(response, note) {
    console.log(response);
    if (response.message == 'success') {
      M.toast({html: 'Note deleted!'})
      let index = this.notes.indexOf(note);
      this.notes.splice(index, 1);
    } else {
      M.toast({html: 'Unable to delete. Try again.'})
    }
  }
}
