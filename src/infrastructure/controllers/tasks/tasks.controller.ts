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
    const tasks = await this.getTasksUsecaseProxy.getInstance().execute();
    console.log('Tasks:', tasks); // Asegúrate de ver si las tareas están llegando
    return tasks;
  }
}
