import { Task } from "./task.model";

export interface TaskRepository {
    getAll(): Task[];
}