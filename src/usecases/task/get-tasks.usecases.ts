import { TaskStatus } from "src/domain/enums/task-status.enum";
import { TaskModel } from "src/domain/model/task.model";

export class GetTasksUseCases {
    constructor() {}

    getTasks(): TaskModel[] {
        let tasks = [];
        const task1 = new TaskModel();
        task1.id = 1;
        task1.name="Example Task";
        task1.status = TaskStatus.PENDING;
        tasks.push(task1);
        return tasks; 
    }
}