import { Task } from '../domain/task.entity';
import { TaskRepository } from '../infrastructure/in-memory-task.repository';

export class ListTasksUseCase {
  constructor(private readonly repo: TaskRepository) {}
  execute(): Promise<Task[]> {
    return this.repo.list();
  }
}
