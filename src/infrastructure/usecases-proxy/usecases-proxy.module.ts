import { Module } from '@nestjs/common';
import { DummyUsecasesProxyModule } from './dummy-usecases-proxy.module';

@Module({
    imports: [
        DummyUsecasesProxyModule.register(),
    ],
    exports: [
        DummyUsecasesProxyModule,
    ],
})
export class UsecasesProxyModule {}