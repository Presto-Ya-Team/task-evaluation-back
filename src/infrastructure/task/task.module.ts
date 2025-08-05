import { Module } from '@nestjs/common';
import { TaskController } from '../controllers/task.controller';
import { TaskUseCases } from '../../usecases/task/task.usecase';
import { InMemoryTaskRepository } from '../repositories/task-storage';
import { ITaskRepository } from '../../domain/repositories/task-repository.interface';

const taskRepositoryProvider = {
  provide: 'ITaskRepository',
  useClass: InMemoryTaskRepository,
};

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [
    TaskUseCases,
    taskRepositoryProvider,
  ],
  exports: [TaskUseCases],
})
export class TaskModule {}