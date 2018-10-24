import { Submission } from './../submission/submission'

export class Lab {
  id: number;
  assigned_date: string;
  due_date: string;
  submissions: Submission[];

  constructor(public url?: string,
              public name?: string
  ) {}
}
