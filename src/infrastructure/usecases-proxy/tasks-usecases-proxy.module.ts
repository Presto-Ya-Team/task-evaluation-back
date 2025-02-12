import { DynamicModule, Module } from '@nestjs/common';
import { UseCaseProxy } from './usecases-proxy';
import { GetTasksUseCase } from 'src/usecases/tasks/get-tasks.usecases';

@Module({})
export class TaskUsecasesProxyModule {
  static GET_TASKS_USECASES_PROXY = 'GET_TASKS_USECASES_PROXY';

  static register(): DynamicModule {
    return {
      module: TaskUsecasesProxyModule,
      providers: [
        {
          provide: this.GET_TASKS_USECASES_PROXY,
          useFactory: () => new UseCaseProxy(new GetTasksUseCase()),
        },
      ],
      exports: [this.GET_TASKS_USECASES_PROXY],
    };
  }
}
