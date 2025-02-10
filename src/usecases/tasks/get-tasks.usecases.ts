import { DummyTypes } from "src/domain/enums/dummy-types.enum";
import { DummyModel } from "src/domain/model/dummy.model";
import { TaskModel } from "src/domain/model/task.model";
import { TaskRepository } from "src/infrastructure/repository/tasks.repository";

export class GetTasksUseCases {
    constructor(private taskRepository: TaskRepository) {}

    getAllTasks(): TaskModel[] {
        const tasks = this.taskRepository.getAllTasks();
        return tasks; 
    }
}