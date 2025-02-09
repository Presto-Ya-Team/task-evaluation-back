import { Injectable } from '@nestjs/common';
import { Task } from '../domain/task.entity';

@Injectable()
export class TaskUseCase {
  private tasks: Task[] = [];

  createTask(name: string, status: string, due_date: Date): Task {
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      status,
      due_date,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
