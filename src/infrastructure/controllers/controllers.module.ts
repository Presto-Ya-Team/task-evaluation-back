import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { DummyController } from './dummy/dummy.controller';
import { TaskController } from './task/task.controller';

@Module({
  imports: [UsecasesProxyModule],
  controllers: [DummyController, TaskController],
})
export class ControllersModule {}
