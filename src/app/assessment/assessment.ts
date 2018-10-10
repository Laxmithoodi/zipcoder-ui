export class Assessment {
  id: number = 1;
  name: string;
  level: string;
  max_score: number;
  url: string;
  assigned_date: Date;

  public constructor(fields?:Partial<Assessment>) {
      Object.assign(this, fields);
  }
}
