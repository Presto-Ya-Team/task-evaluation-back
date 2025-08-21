import { Task } from "src/domain/model/task.model";
import { TasksRepository } from "src/infrastructure/repository/tasks.repository";

export class GetTasksUseCases {
    constructor(private tasksRepository: TasksRepository) {}

    getAllTasks(): Task[] {
        const tasks = this.tasksRepository.getAllTasks();
        return tasks;
    }
}