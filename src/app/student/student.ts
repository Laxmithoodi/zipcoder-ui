export class Student {
  id: number;
  name: string;
  email: string;
  cell_number: string;
  github_id: number;
  github_username: string;
  grade: number;

  public constructor(fields?:Partial<Student>) {
      Object.assign(this, fields);
  }
}
