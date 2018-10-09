import { Component, OnInit } from '@angular/core';
import { Note } from './../note';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-note-index',
  templateUrl: './note-index.component.html',
  styleUrls: ['./note-index.component.scss']
})
export class NoteIndexComponent implements OnInit {
  notes: Array<Note>;

  constructor(private service: NoteService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.notes = data);
  }

  delete(note) {
    this.service.delete(note);
  }

  assign(note) {
    note.assigned_date = new Date();
    this.service.assign(note);
  }
}
