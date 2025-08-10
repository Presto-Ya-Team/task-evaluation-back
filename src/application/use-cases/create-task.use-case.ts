import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Task } from '@src/domain/entities/task.entity';
import { TaskRepository } from '@src/domain/repositories/task.repository';

@Injectable()
export class CreateTaskUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(input: { title: string; description?: string }): Promise<Task> {
    const newTask = new Task(uuidv4(), input.title, input.description ?? null, false, new Date());

    return await this.taskRepo.save(newTask);
  }
}
