import { Controller, Get } from "@nestjs/common";
import { TaskMemoryRepository } from "src/infrastructure/repository/task-repository";
import { GetTasksUseCases } from "src/usecases/tasks/get-alltasks.usecase";
import { Task } from "src/domain/model/task.model";
@Controller('tasks')
export class TaskController{
    private getTaskUseCase:GetTasksUseCases
    constructor(){
        const taskRepository=new TaskMemoryRepository();
        this.getTaskUseCase=new GetTasksUseCases(taskRepository);
    }
    @Get()
    getAllTask(): Task[]{
        return this.getTaskUseCase.getAllTasks();
    }


}