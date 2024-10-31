export class TaskDTO {
    id: number;
    name: string;
    due_date: Date;
    status: 'pending' | 'completed';
  }