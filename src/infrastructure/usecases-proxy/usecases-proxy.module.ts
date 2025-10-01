import { Module } from '@nestjs/common';
import { DummyUsecasesProxyModule } from './dummy-usecases-proxy.module';
import { TasksUsecasesProxyModule } from './tasks-usecases-proxy.module';

@Module({
    imports: [
        DummyUsecasesProxyModule.register(),
        TasksUsecasesProxyModule.register(), 
    ],
    exports: [
        DummyUsecasesProxyModule,
        TasksUsecasesProxyModule, 
    ],
})
export class UsecasesProxyModule {}