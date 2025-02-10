import { Controller, Get } from "@nestjs/common";
import { TaskModel } from "src/domain/model/task.model";
import { TaskRepository } from "src/infrastructure/repository/tasks.repository";
import { GetTasksUseCases } from "src/usecases/tasks/get-tasks.usecases";

@Controller('tasks')
export class TaskController {

    private getTasksUseCase: GetTasksUseCases;

    constructor() {
      const taskRepository = new TaskRepository();
      this.getTasksUseCase = new GetTasksUseCases(taskRepository);
    }
  
    @Get()
    getAllTasks(): TaskModel[] {
      return this.getTasksUseCase.getAllTasks();
    }
}