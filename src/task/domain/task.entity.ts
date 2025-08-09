import { TaskStatus } from "./task-status.enum";

export interface Task {
  id: string;
  name: string;
  dueDate: string;
  status: TaskStatus;
}