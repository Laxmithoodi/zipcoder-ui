export class Grade {
  id: number;
  grade: number;
  student_id: number;
  assessment_id: number;

  public constructor(fields?:Partial<Grade>) {
      Object.assign(this, fields);
  }
}
