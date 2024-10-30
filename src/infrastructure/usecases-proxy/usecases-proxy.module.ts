import { Module } from '@nestjs/common';
import { DummyUsecasesProxyModule } from './dummy-usecases-proxy.module';
import { TaskUsecasesProxyModule } from './task-usescases-proxy.module';

@Module({
    imports: [
        DummyUsecasesProxyModule.register(),
        TaskUsecasesProxyModule.register(),
    ],
    exports: [
        DummyUsecasesProxyModule,
        TaskUsecasesProxyModule
    ],
})
export class UsecasesProxyModule {}