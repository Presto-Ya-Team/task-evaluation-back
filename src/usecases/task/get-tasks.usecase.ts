import { Task } from '../../domain/model/task.model';

export class GetTasksUseCase {
  private tasks: Task[] = [
    new Task('1', 'Task 1', new Date('01-10-2025'), 'pendiente'),
    new Task('2', 'Task 2', new Date('02-10-2025'), 'en progreso'),
    new Task('3', 'Task 3', new Date('03-10-2025'), 'completado'),
  ];

  async execute(): Promise<Task[]> {
    return this.tasks;
  }
}