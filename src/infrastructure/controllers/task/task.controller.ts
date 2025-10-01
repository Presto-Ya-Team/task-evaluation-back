import { Controller, Get } from '@nestjs/common';
import { GetTasksUseCase } from '../../../usecases/task/get-tasks.usecase';
import { Task } from "../../../domain/model/task.model";

@Controller('tasks')
export class TaskController {
  constructor(private readonly getTasksUseCase: GetTasksUseCase) {}

  @Get()
  async getTasks(): Promise<Task[]> {
    return this.getTasksUseCase.execute();
  }
}