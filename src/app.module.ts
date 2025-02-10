import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { TaskController } from './infrastructure/controllers/tasks/task.controller';

@Module({
  imports: [ControllersModule, UsecasesProxyModule],
  controllers: [AppController, TaskController],
  providers: [AppService],
})
export class AppModule {}
