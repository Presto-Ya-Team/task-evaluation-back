import { Module } from '@nestjs/common';

import { DatabaseModule } from './infrastructure/database/typeorm/database.module';
import { TasksModule } from './interfaces/rest/tasks/tasks.module';

@Module({
  imports: [DatabaseModule, TasksModule],
})
export class AppModule {}
