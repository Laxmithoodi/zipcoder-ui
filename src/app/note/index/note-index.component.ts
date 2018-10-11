import { Component, OnInit, Input } from '@angular/core';
import { Note } from './../note';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-note-index',
  templateUrl: './note-index.component.html',
  styleUrls: ['./note-index.component.scss']
})
export class NoteIndexComponent implements OnInit {
  @Input() notes: Note[];

  constructor(private service: NoteService) { }

  delete(note) {
    this.service.delete(note);
  }
}
