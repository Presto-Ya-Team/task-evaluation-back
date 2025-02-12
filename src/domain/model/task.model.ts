export class Task {
    constructor(
      public id: number,
      public name: string,
      public dueDate: Date,
      public status: 'pending' | 'completed',
    ) {}
  }
  