import { Controller, Get } from '@nestjs/common';
import { ListTasksUseCase } from './application/list-tasks.usecase';
import { Task } from './domain/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly listTasks: ListTasksUseCase) {}

  @Get()
  async getTasks(): Promise<Task[]> {
    return this.listTasks.execute();
  }
}
