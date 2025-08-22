import { TaskRepository } from "src/domain/model/task.repository.model";
import { Task } from "src/domain/model/task.model";
export class GetTasksUseCases{
    constructor(private taskRepository: TaskRepository){}
    getAllTasks(): Task[] {
        const tasks = this.taskRepository.getAll();
        return tasks;
    }
}