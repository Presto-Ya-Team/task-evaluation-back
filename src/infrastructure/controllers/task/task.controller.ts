import { Controller, Get, Inject } from '@nestjs/common';
import { UseCaseProxy } from 'src/infrastructure/usecases-proxy/usecases-proxy';
import { TaskUsecasesProxyModule } from '../../usecases-proxy/task-usecases-proxy.module';
import { GetTasksUsecases } from '../../../usecases/task/get-tasks.usecases';

@Controller('tasks')
export class TaskController {
  constructor(
    @Inject(TaskUsecasesProxyModule.GET_TASKS_USECASES_PROXY)
    private readonly getTasksUsecaseProxy: UseCaseProxy<GetTasksUsecases>,
  ) {}

  @Get('')
  async getTasks() {
    // Retrasa la carga de los datos para simular una carga real
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // Simula un error
    // throw new Error('Error');
    return this.getTasksUsecaseProxy.getInstance().getTasks();
  }
}
