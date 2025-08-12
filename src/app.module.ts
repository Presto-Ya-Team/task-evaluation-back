import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { TaskController } from './infrastructure/controllers/task.controller';
import { GetAllTasksUseCase } from './usecases/tasks/get-all-tasks.usecase';

@Module({
  imports: [ControllersModule, UsecasesProxyModule],
  controllers: [AppController ,TaskController],
  providers: [AppService, GetAllTasksUseCase],
})
export class AppModule {}
