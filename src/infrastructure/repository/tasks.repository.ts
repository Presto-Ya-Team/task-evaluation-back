import { TaskStatus } from "src/domain/enums/task-status.enum";
import { Task } from "src/domain/model/task.model";

export class TasksRepository {
    tasks: Task[] = [];

    constructor() {
        this.tasks = [
            new Task(1, "Test Task1", new Date('2025-09-25'), TaskStatus.PENDING),
            new Task(2, "Test Task2", new Date('2025-07-16'), TaskStatus.COMPLETED),
            new Task(3, 'Test Task3', new Date('2025-08-26'), TaskStatus.IN_PROGRESS)
        ];
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }
}