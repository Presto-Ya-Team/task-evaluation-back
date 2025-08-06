import { Module } from '@nestjs/common';
import { DummyUsecasesProxyModule } from './dummy-usecases-proxy.module';
import { TaskUseCasesProxyModule } from './task-usecases-proxy.module';

@Module({
    imports: [
        DummyUsecasesProxyModule.register(),
        TaskUseCasesProxyModule
    ],
    exports: [
        DummyUsecasesProxyModule,
        TaskUseCasesProxyModule
    ],
})
export class UsecasesProxyModule {}