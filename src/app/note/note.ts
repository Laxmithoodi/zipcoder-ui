export class Note {
  id: number;
  student_id: number;
  creator_email: string;


  public constructor(fields?:Partial<Note>) {
      Object.assign(this, fields);
  }
}
