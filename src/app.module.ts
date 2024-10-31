import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { TaskController } from './presentation/controllers/task.controller';
import { TaskRepository } from './infrastructure/repositories/task.repository';

@Module({
  imports: [ControllersModule, UsecasesProxyModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskRepository],
})
export class AppModule {}
