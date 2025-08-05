import { Task } from '../model/task.model';
import { TaskStatus } from '../enums/task-status.enum';

export interface ITaskRepository {
  findAll(): Promise<Task[]>;
  create(task: Task): Promise<Task>;
  delete(id: string): Promise<boolean>;
  
  updateStatus(id: string, status: TaskStatus): Promise<Task | null>;
}
