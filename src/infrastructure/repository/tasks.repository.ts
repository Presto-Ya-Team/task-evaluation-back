import { TaskTypes } from 'src/domain/enums/task-status.enum';
import { TaskModel } from 'src/domain/model/task.model';

export class TaskRepository {

    tasks: TaskModel[] = [];
    constructor() {
        this.tasks = [
            new TaskModel(1, 'Tarea 1', new Date(), TaskTypes.IN_PROGRESS),
            new TaskModel(2, 'Tarea 2', new Date(), TaskTypes.PENDING)
        ];
    }

    getAllTasks(): TaskModel[] {
        return this.tasks;
    }
}