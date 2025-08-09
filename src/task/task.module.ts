import { Module } from '@nestjs/common';
import { TasksController } from './task.controller';
import { InMemoryTaskRepository } from './infrastructure/in-memory-task.repository';
import { ListTasksUseCase } from './application/list-tasks.usecase';

@Module({
  controllers: [TasksController],
  providers: [
    { provide: 'TaskRepository', useClass: InMemoryTaskRepository },
    {
      provide: ListTasksUseCase,
      useFactory: (repo: InMemoryTaskRepository) => new ListTasksUseCase(repo),
      inject: ['TaskRepository'],
    },
  ],
})
export class TasksModule {}
