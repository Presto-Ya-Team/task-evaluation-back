import { Controller, Post, Body } from '@nestjs/common';
import { TaskUseCase } from '../../usecases/task.usecase';
import { Task } from '../../domain/task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private taskUseCase: TaskUseCase) {}

  @Post()
  createTask(
    @Body('name') name: string,
    @Body('status') status: string,
    @Body('due_date') due_date: Date,
  ): Task {
    return this.taskUseCase.createTask(name, status, due_date);
  }
}
