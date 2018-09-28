export class Student {
  id: number = 1;
  name: string;
  email: string;
  cell_number: string;
  github_id: string;
  github_username: string;

  public constructor(fields?:Partial<Student>) {
      Object.assign(this, fields);
  }
}
