import { Injectable } from '@nestjs/common';
import { Task } from '../domain/task.entity';
import { tasksData } from '../infrastructure/tasks';

@Injectable()
export class TaskUseCase {
  private tasks: Task[] = tasksData;
  
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

  getTasks(): Task[] {
    return this.tasks;
  }
}
