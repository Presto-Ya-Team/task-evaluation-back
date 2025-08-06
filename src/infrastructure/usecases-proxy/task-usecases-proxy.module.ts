import { Module, Provider } from "@nestjs/common";
import { GetTaskUseCase } from "src/usecases/task/get-task.usercases"

export enum TaskUseCases {
    GET_TASKS = 'GET_TASKS'
}

const getTasksProvider: Provider = {
    provide: TaskUseCases.GET_TASKS,
    useFactory: () => {
        return new GetTaskUseCase();
    },
};

@Module({
    providers: [getTasksProvider],
    exports: [getTasksProvider]
})

export class TaskUseCasesProxyModule {}