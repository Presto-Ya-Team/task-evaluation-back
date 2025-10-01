import { Module, DynamicModule } from '@nestjs/common';
import { GetTasksUseCase } from '../../usecases/task/get-tasks.usecase';

@Module({})
export class TasksUsecasesProxyModule {
  static register(): DynamicModule {
    return {
      module: TasksUsecasesProxyModule,
      providers: [GetTasksUseCase],
      exports: [GetTasksUseCase],
    };
  }
}