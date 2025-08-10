import { Injectable } from '@nestjs/common';

import { Task } from '@src/domain/entities/task.entity';
import { TaskRepository } from '@src/domain/repositories/task.repository';

@Injectable()
export class GetTasksUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return await this.taskRepo.findAll();
  }
}
