import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [AppController],
})
@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
