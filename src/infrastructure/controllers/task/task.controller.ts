import { Controller, Get, Inject } from "@nestjs/common";
import { Task } from "src/domain/model/task.model";
import { TaskUseCases } from "src/infrastructure/usecases-proxy/task-usecases-proxy.module";
import { GetTaskUseCase } from "src/usecases/task/get-task.usercases";
import { TaskDto } from "./dto/task.dto";
import { plainToInstance } from "class-transformer";

@Controller('tasks')
export class TaskController {
    constructor(    
        @Inject(TaskUseCases.GET_TASKS)
        private readonly getTaskUseCase: GetTaskUseCase,
) {}
    @Get()
    getTasks(): TaskDto[] {
        const tasks = this.getTaskUseCase.execute();

        return plainToInstance(TaskDto, tasks);
    }
}