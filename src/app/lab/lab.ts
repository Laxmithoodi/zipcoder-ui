export class Lab {
  id: number;
  assigned_date: Date;
  due_date: Date;

  constructor(public url?: string,
              public name?: string
  ) {}
}
