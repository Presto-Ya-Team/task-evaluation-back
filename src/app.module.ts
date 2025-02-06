import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ControllersModule, UsecasesProxyModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
