import { Injectable } from '@nestjs/common';

import { TaskRepository } from 'src/domain/repositories/task.repository';

@Injectable()
export class DeleteTaskUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(id: string): Promise<boolean> {
    const existing = await this.taskRepo.findById(id);

    if (!existing) {
      return false;
    }

    await this.taskRepo.delete(id);

    return true;
  }
}
