export class Lab {
  id: number;
  assigned_date: string;
  due_date: string;

  constructor(public url?: string,
              public name?: string
  ) {}
}
