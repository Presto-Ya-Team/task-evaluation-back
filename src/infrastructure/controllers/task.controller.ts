import { Controller, Get } from '@nestjs/common';
import { GetAllTasksUseCase } from '../../usecases/tasks/get-all-tasks.usecase';
import { Task } from '../../domain/entities/task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly getAllTasksUseCase: GetAllTasksUseCase) {}

  @Get()
  getAll(): Task[] {
    return this.getAllTasksUseCase.execute();
  }
}
