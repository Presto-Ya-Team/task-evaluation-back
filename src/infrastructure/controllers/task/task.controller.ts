import { Controller, Get, Inject } from "@nestjs/common";
import { TaskUsecasesProxyModule } from "src/infrastructure/usecases-proxy/task-usecases-proxy.module";
import { UseCaseProxy } from "src/infrastructure/usecases-proxy/usecases-proxy";
import { GetTasksUseCases } from "src/usecases/task/get-tasks.usecases";

@Controller('tasks')
export class TaskController {
    constructor(
        @Inject(TaskUsecasesProxyModule.GET_TASKS_USECASES_PROXY)
        private readonly getTasksUsecaseProxy: UseCaseProxy<GetTasksUseCases>,
    ) {}


    @Get('')
    async getDummies() {
        const tasks = await this.getTasksUsecaseProxy.getInstance().getTasks();
        return tasks;
    }
}