export class Note {
  id: number;
  student_id: number;
  note_taker: string;
  body: string;

  public constructor(fields?:Partial<Note>) {
      Object.assign(this, fields);
  }
}
