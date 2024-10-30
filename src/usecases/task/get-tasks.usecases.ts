import { TaskModel } from '../../domain/model/task.model';
import { TaskStatus } from '../../domain/enums/task-status.enum';

export class GetTasksUsecases {
  constructor() {}

  getTasks(): TaskModel[] {
    const tasks = [];

    const task1 = new TaskModel(
      'Task 1',
      'Task 1 description',
      TaskStatus.PENDING,
    );

    const task2 = new TaskModel(
      'Task 2',
      'Task 2 description',
      TaskStatus.IN_PROGRESS,
    );

    const task3 = new TaskModel(
      'Task 3',
      'Task 3 description',
      TaskStatus.COMPLETED,
    );

    const task4 = new TaskModel(
      'Task 4',
      'Task 4 description',
      TaskStatus.COMPLETED,
    );

    tasks.push(task1, task2, task3, task4);
    return tasks;
  }
}
