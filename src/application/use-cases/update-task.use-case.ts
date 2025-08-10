import { Injectable } from '@nestjs/common';

import { Task } from '@src/domain/entities/task.entity';
import { TaskRepository } from '@src/domain/repositories/task.repository';

@Injectable()
export class UpdateTaskUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(input: {
    id: string;
    title?: string;
    description?: string;
    completed?: boolean;
  }): Promise<Task | null> {
    const existingTask = await this.taskRepo.findById(input.id);

    if (!existingTask) {
      return null;
    }
    if (input.title !== undefined) {
      existingTask.updateTitle(input.title);
    }
    if (input.description !== undefined) {
      existingTask.updateDescription(input.description);
    }
    if (input.completed !== undefined) {
      if (input.completed) {
        existingTask.markAsCompleted();
      } else {
        existingTask.markAsIncompleted();
      }
    }

    existingTask.updatedAt = new Date();

    return await this.taskRepo.update(existingTask);
  }
}
