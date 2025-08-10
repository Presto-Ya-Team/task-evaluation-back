import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskOrmEntity } from './entities/task.orm-entity';
import { TypeOrmTaskRepository } from './task.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'tasks.db',
      entities: [TaskOrmEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TaskOrmEntity]),
  ],
  providers: [
    {
      provide: 'TaskRepository',
      useClass: TypeOrmTaskRepository,
    },
  ],
  exports: ['TaskRepository'],
})
export class DatabaseModule {}
