/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Module } from '@nestjs/common';

import { TaskRepository } from '@src/domain/repositories/task.repository';
import { DatabaseModule } from '@src/infrastructure/database/typeorm/database.module';

import { CreateTaskUseCase } from './create-task.use-case';
import { DeleteTaskUseCase } from './delete-task.use-case';
import { GetTaskUseCase } from './get-task.use-case';
import { GetTasksUseCase } from './get-tasks.use-case';
import { UpdateTaskUseCase } from './update-task.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: CreateTaskUseCase,
      useFactory: (repo: TaskRepository) => new CreateTaskUseCase(repo),
      inject: ['TaskRepository'],
    },
    {
      provide: GetTasksUseCase,
      useFactory: (repo: TaskRepository) => new GetTasksUseCase(repo),
      inject: ['TaskRepository'],
    },
    {
      provide: GetTaskUseCase,
      useFactory: (repo: TaskRepository) => new GetTaskUseCase(repo),
      inject: ['TaskRepository'],
    },
    {
      provide: UpdateTaskUseCase,
      useFactory: (repo: TaskRepository) => new UpdateTaskUseCase(repo),
      inject: ['TaskRepository'],
    },
    {
      provide: DeleteTaskUseCase,
      useFactory: (repo: TaskRepository) => new DeleteTaskUseCase(repo),
      inject: ['TaskRepository'],
    },
  ],
  exports: [
    CreateTaskUseCase,
    GetTasksUseCase,
    GetTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
  ],
})
export class UseCaseModule {}
