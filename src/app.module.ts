import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ControllersModule, UsecasesProxyModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
