import { Module } from '@nestjs/common';

import { UseCaseModule } from '@src/application/use-cases/use-case.module';

import { TasksController } from './tasks.controller';

@Module({
  imports: [UseCaseModule],
  controllers: [TasksController],
})
export class TasksModule {}
