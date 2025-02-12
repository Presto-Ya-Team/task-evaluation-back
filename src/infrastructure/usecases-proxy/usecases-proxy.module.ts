import { Module } from '@nestjs/common';
import { DummyUsecasesProxyModule } from './dummy-usecases-proxy.module';
import { TaskUsecasesProxyModule } from './tasks-usecases-proxy.module';

@Module({
    imports: [
        DummyUsecasesProxyModule.register(),
        TaskUsecasesProxyModule.register(),
    ],
    exports: [
        DummyUsecasesProxyModule,
        TaskUsecasesProxyModule,
    ],
})
export class UsecasesProxyModule {}