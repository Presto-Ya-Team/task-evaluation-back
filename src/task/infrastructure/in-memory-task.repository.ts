import { Task } from '../domain/task.entity';
import { TaskStatus } from '../domain/task-status.enum';

export interface TaskRepository {
  list(): Promise<Task[]>;
}

export class InMemoryTaskRepository implements TaskRepository {
  private readonly data: Task[] = [
    { id: '1', name: 'Setup project',  dueDate: '2025-08-15', status: TaskStatus.PENDING },
    { id: '2', name: 'Implement API',  dueDate: '2025-08-16', status: TaskStatus.IN_PROGRESS },
    { id: '3', name: 'Wire Angular UI',dueDate: '2025-08-17', status: TaskStatus.DONE },
  ];

  async list(): Promise<Task[]> {
    return this.data;
  }
}
