import { DynamicModule, Module } from "@nestjs/common";
import { UseCaseProxy } from "./usecases-proxy";
import { GetTasksUseCases } from "src/usecases/task/get-tasks.usecases";



@Module({
  imports: [],
})
export class TaskUsecasesProxyModule {
  static GET_TASKS_USECASES_PROXY = 'GET_ALL_TASKS_USECASES_PROXY';

  static register(): DynamicModule{
    return {
      module: TaskUsecasesProxyModule,
      providers: [
        {
          inject: [],
          provide: this.GET_TASKS_USECASES_PROXY,
          useFactory: () => new UseCaseProxy(new GetTasksUseCases(

          )),
        },
      ],
      exports: [
        this.GET_TASKS_USECASES_PROXY,
      ]
    }
  }
}