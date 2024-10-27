import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { DummyController } from './dummy/dummy.controller';


@Module({
    imports: [
        UsecasesProxyModule,
    ],
    controllers: [
        DummyController,
    ],
})
export class ControllersModule {}