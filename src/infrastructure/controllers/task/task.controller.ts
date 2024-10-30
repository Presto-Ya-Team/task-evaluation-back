import { Controller, Get, Inject } from "@nestjs/common";
import { UseCaseProxy } from "src/infrastructure/usecases-proxy/usecases-proxy";
import { TaskUsecasesProxyModule } from '../../usecases-proxy/task-usescases-proxy.module';
import { GetTasksUseCases } from '../../../usecases/task/get-tasks.usecases';

@Controller('tasks')
export class TaskController {
  constructor(
    @Inject(TaskUsecasesProxyModule.GET_TASKS_USECASES_PROXY)
    private readonly getTasksUsecaseProxy: UseCaseProxy<GetTasksUseCases>,
  ) {}


  @Get('')
  async getTasks() {
    const tasks = await this.getTasksUsecaseProxy.getInstance().getTasks();
    return tasks;
  }
}