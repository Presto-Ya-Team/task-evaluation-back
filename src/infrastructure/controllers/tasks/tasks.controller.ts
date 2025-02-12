import { Controller, Get, Inject } from '@nestjs/common';
import { TaskUsecasesProxyModule } from 'src/infrastructure/usecases-proxy/tasks-usecases-proxy.module';
import { UseCaseProxy } from 'src/infrastructure/usecases-proxy/usecases-proxy';
import { GetTasksUseCase } from 'src/usecases/tasks/get-tasks.usecases';

@Controller('tasks')
export class TaskController {
  constructor(
    @Inject(TaskUsecasesProxyModule.GET_TASKS_USECASES_PROXY)
    private readonly getTasksUsecaseProxy: UseCaseProxy<GetTasksUseCase>,
  ) {}

  @Get()
  async getTasks() {
    return await this.getTasksUsecaseProxy.getInstance().execute();
  }
}
