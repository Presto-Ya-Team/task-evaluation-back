import { Task } from '../../domain/model/task.model';
import { TaskStatus } from '../../domain/enums/task-status.enum';
export class GetTasksUseCase {
  execute(): Task[] {
    return [
      new Task(1, 'Tarea 1', new Date('2025-02-15'), TaskStatus.PENDING),
      new Task(2, 'Tarea 2', new Date('2025-02-20'), TaskStatus.COMPLETED),
    ];
  }
}
