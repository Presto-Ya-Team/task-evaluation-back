import { TaskStatus } from '../enums/task-status.enum';
import { TaskPriority } from '../enums/task-priority.enum';

export class Task {
  public readonly id: string;
  public readonly createdAt: Date;
  public updatedAt: Date;

  constructor(
    public title: string,
    public description: string,
    public dueDate: Date,
    public status: TaskStatus,
    public priority: TaskPriority,
    public estimatedHours: number,
    id?: string
  ) {
    this.id = id || Math.random().toString(36).substr(2, 9);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  updateStatus(newStatus: TaskStatus): void {
    this.status = newStatus;
    this.updatedAt = new Date();
  }
}