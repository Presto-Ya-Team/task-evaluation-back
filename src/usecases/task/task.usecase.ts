import { Injectable, Inject } from '@nestjs/common';
import { Task } from '../../domain/model/task.model';
import { ITaskRepository } from '../../domain/repositories/task-repository.interface';
import { TaskStatus } from '../../domain/enums/task-status.enum';
import { TaskPriority } from '../../domain/enums/task-priority.enum';

export interface CreateTaskDto {
  title: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority;
  estimatedHours: number;
}

@Injectable()
export class TaskUseCases {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepository: ITaskRepository
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task(
      createTaskDto.title,
      createTaskDto.description,
      new Date(createTaskDto.dueDate),
      TaskStatus.PENDING,
      createTaskDto.priority,
      createTaskDto.estimatedHours
    );
    
    return this.taskRepository.create(task);
  }

  async deleteTask(id: string): Promise<boolean> {
    return this.taskRepository.delete(id);
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task | null> {
    const task = await this.taskRepository.updateStatus(id, status);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }
}