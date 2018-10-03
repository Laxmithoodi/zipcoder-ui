export class Lab {
  id: number;
  url: string;
  name: string;
  assigned_date: Date;
  due_date: Date;

  constructor(public url?: string,
              public name?: string
  ) {}
}
