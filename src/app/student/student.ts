import { Grade } from './../assessment/grade/grade';
import { Submission } from './../submission/submission';

export class Student {
  id: number;
  name: string;
  email: string;
  cell_number: string;
  github_id: number;
  github_username: string;
  zipcode_rocks_username: string;
  grades: Grade[];
  grade: number;
  submissions: Submission[];

  public constructor(fields?:Partial<Student>) {
      Object.assign(this, fields);
  }
}
