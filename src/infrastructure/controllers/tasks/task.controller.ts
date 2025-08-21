import { Controller, Get } from "@nestjs/common";
import { Task } from "src/domain/model/task.model";
import { TasksRepository } from "src/infrastructure/repository/tasks.repository";
import { GetTasksUseCases } from "src/usecases/tasks/get-tasks.usecases";

@Controller('tasks')
export class TaskController {

    private getTasskUseCases: GetTasksUseCases;

    constructor(){
        const tasksRepository = new TasksRepository();
        this.getTasskUseCases = new GetTasksUseCases(tasksRepository);
    }

    @Get()
    getAllTasks(): Task[] {
        return this.getTasskUseCases.getAllTasks();
    }
}