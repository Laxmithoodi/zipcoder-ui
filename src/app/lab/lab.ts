export class Lab {
  id: number = 1;
  assigned_date: Date;
  due_date: Date;

  constructor(public url?: string,
              public name?: string
  ) {}
}
