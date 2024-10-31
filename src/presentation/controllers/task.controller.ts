import { Controller, Get } from '@nestjs/common';
import { TaskRepository } from '../../infrastructure/repositories/task.repository';
import { TaskDTO } from '../../application/dto/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private taskRepository: TaskRepository) {}

  @Get()
  findAll(): TaskDTO[] {
    return this.taskRepository.findAll();
  }
}