import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { DummyController } from './dummy/dummy.controller';
import { TaskModule } from '../task/task.module';
import { TaskController } from './task.controller';

@Module({
    imports: [
        UsecasesProxyModule,
        TaskModule,
    ],
    controllers: [
        DummyController,
        TaskController,
    ],
})
export class ControllersModule {}