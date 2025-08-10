import { Injectable } from '@nestjs/common';

import { Task } from 'src/domain/entities/task.entity';
import { TaskRepository } from 'src/domain/repositories/task.repository';

@Injectable()
export class GetTaskUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(id: string): Promise<Task | null> {
    return await this.taskRepo.findById(id);
  }
}
