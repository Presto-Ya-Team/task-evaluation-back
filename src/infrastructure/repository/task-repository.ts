
import { Task } from "src/domain/model/task.model";
import { TaskStatus } from "src/domain/enums/task-status.enum";
import { TaskRepository } from "src/domain/model/task.repository.model";

export class TaskMemoryRepository implements TaskRepository {
    private tasks: Task[] = [
        { id: 1, name: "Tarea 1", status: TaskStatus.PENDING },
        { id: 2, name: "Tarea 2", status: TaskStatus.PENDING }
       
    ];

    getAll(): Task[] {
        return this.tasks;
    }
}