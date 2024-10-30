import { TaskStatus } from '../enums/task-status.enum';

export class TaskModel {
  readonly id: string;
  name: string;
  description: string;
  status: TaskStatus;

  constructor(name: string, description: string, status: TaskStatus) {
    this.id = this.generateUniqueId();
    this.name = name;
    this.description = description;
    this.status = status;
  }

  private generateUniqueId(): string {
    return `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
  }
}
