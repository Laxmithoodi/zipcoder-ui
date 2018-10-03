export class Submission {
  pr_url: string;
  submittable: string;
  submittable_id: number;
  student_id: number;

  public constructor(fields?:Partial<Submission>) {
      Object.assign(this, fields);
  }
}
