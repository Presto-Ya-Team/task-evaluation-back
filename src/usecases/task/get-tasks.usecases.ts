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
        
        const task2 = new TaskModel();
        task2.id = 2;
        task2.name="Example Task 2";
        task2.status = TaskStatus.INPROGRESS;
        
        const task3 = new TaskModel();
        task3.id = 3;
        task3.name="Example Task 3";
        task3.status = TaskStatus.DONE;
        tasks.push(task1,task2,task3);
        return tasks; 
    }
}