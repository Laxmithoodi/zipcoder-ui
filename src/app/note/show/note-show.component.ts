import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Note } from './../note';
import { NoteService } from './../note.service';

import { Student } from './../../student/student';

@Component({
  selector: 'app-note-show',
  templateUrl: './note-show.component.html',
  styleUrls: ['./note-show.component.scss']
})
export class NoteShowComponent implements OnInit {
  note: Note = new Note();
  students: Student[] = [];

  constructor(private route: ActivatedRoute, private service: NoteService) {
    this.note.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.note.id) {
      this.service.getStudents(this.note.id).subscribe(data => {
        this.note = data.note;
        this.students = data.students;
      });
    }
  }

  getNotCompleted(students) {
    return students.filter(student => student['submissions'].length == 0);
  }

  getCompleted(students){
    return students.filter(student => student['submissions'].length > 0);
  }
}
